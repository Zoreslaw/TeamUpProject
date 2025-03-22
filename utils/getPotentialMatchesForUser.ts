import { getFirestore, collection, getDocs, doc } from '@react-native-firebase/firestore';
// import { DocumentData } from 'firebase/firestore';
import User from '@/types/User';

interface ScoredMatch {
    user: User;  // The candidate user
    score: number;      // The final match score
}

/**
 * MAIN FUNCTION:
 * 1) Fetch the currentUser doc
 * 2) Fetch all other users
 * 3) Filter out incompatible or disliked
 * 4) Compute a match score for each
 * 5) Sort & return top matches
 */

export async function getPotentialMatchesForUser(userId: string, limitN: number): Promise<ScoredMatch[]> {
    const db = getFirestore();
  
    // 1) Fetch the current user's profile
    const currentUserDoc = await db.collection('users').doc(userId).get();
    if (!currentUserDoc.exists) {
      throw new Error(`User ${userId} does not exist`);
    }
    const currentUser = { id: userId, ...currentUserDoc.data() } as User;
    
    // Validate current user has required fields
    if (!currentUser.preferenceAgeRange || !currentUser.preferenceGender || !currentUser.gender) {
      throw new Error('Current user profile is incomplete');
    }

    // Ensure current user has a photo URL
    if (!currentUser.photoURL) {
      currentUser.photoURL = 'https://firebasestorage.googleapis.com/v0/b/teamup-8f0c5.appspot.com/o/default-avatar.png?alt=media';
    }
  
    // 2) Fetch all user docs from /users
    const usersSnap = await db.collection('users').get();
    const allUsers: User[] = usersSnap.docs.map((d) => {
      const userData = { id: d.id, ...d.data() } as User;
      // Ensure each user has a photo URL
      if (!userData.photoURL) {
        userData.photoURL = 'https://firebasestorage.googleapis.com/v0/b/teamup-8f0c5.appspot.com/o/default-avatar.png?alt=media';
      }
      return userData;
    });
  
    // 3) Filter out incompatible users
    const filteredCandidates = allUsers.filter((candidate) => {
      // Skip invalid candidates
      if (!candidate.preferenceAgeRange || !candidate.preferenceGender || !candidate.gender) {
        return false;
      }

      if (candidate.id === currentUser.id) return false;
  
      // Check if currentUser has disliked them
      if (currentUser.disliked?.includes(candidate.id)) return false;
  
      // Check if candidate disliked currentUser
      if (candidate.disliked?.includes(currentUser.id)) return false;
  
      // Age preference checks
      if (candidate.age < currentUser.preferenceAgeRange.min || candidate.age > currentUser.preferenceAgeRange.max) {
        return false;
      }
      if (currentUser.age < candidate.preferenceAgeRange.min || currentUser.age > candidate.preferenceAgeRange.max) {
        return false;
      }
  
      // Gender preference checks
      if (currentUser.preferenceGender !== 'Any') {
        if (currentUser.preferenceGender === 'Male' || currentUser.preferenceGender === 'Female') {
          if (currentUser.preferenceGender !== candidate.gender) {
            return false;
          }
        }
        if (currentUser.preferenceGender === 'Other' && candidate.gender === currentUser.gender) {
          return false;
        }
      }

      if (candidate.preferenceGender !== 'Any') {
        if (candidate.preferenceGender === 'Male' || candidate.preferenceGender === 'Female') {
          if (candidate.preferenceGender !== currentUser.gender) {
            return false;
          }
        }
        if (candidate.preferenceGender === 'Other' && currentUser.gender === candidate.gender) {
          return false;
        }
      }

      return true;
    });
  
    // 4) Compute match scores
    const scored: ScoredMatch[] = filteredCandidates.map((candidate) => {
      const score = computeMatchScore(currentUser, candidate);
      return { user: candidate, score };
    });
  
    // 5) Sort and return top matches
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, limitN);
  }
  
  /**
   * A simple scoring function that sums partial scores for:
   * - Category synergy
   * - Language overlap
   * - Favorite games overlap
   * - Age proximity
   * - If candidate has liked me
   * - Possibly more
   */
  function computeMatchScore(me: User, candidate: User): number {
    let total = 0;
  
    // 1) Category synergy
    //    If my favoriteCategory is in candidate's preferenceCategories => +10
    if (candidate.preferenceCategories.includes(me.favoriteCategory)) {
      total += 10;
    }
    //    If candidate's favoriteCategory is in my preferenceCategories => +10
    if (me.preferenceCategories.includes(candidate.favoriteCategory)) {
      total += 10;
    }
  
    // 2) Language overlap
    //    +5 for each shared language
    const sharedLangs = me.languages.filter((lang) => candidate.languages.includes(lang));
    total += (sharedLangs.length * 5);
  
    // 3) Favorite games overlap
    //    For each game in my favorites that candidate also has in favorites => +15
    const commonFavGames = me.favoriteGames.filter((g) => candidate.favoriteGames.includes(g));
    total += (commonFavGames.length * 15);
  
    // 4) Age proximity => e.g. if difference <= 2 => +5, <=5 => +3
    const ageDiff = Math.abs(me.age - candidate.age);
    if (ageDiff <= 2) {
      total += 5;
    } else if (ageDiff <= 5) {
      total += 3;
    }
  
    // 5) If candidate has liked me => +20
    if (candidate.liked?.includes(me.id)) {
      total += 20;
    }
  
    // 6) (Optional) Time zone or schedule synergy => not implemented in this example
  
    // 7) (Optional) Check "All user games" for partial synergy => not implemented
    console.log('total', total, 'candidate', candidate.displayName, candidate.id);
    return total;
  }