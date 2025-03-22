export default interface User {
  id: string;
  displayName: string;
  email: string;
  photoURL: string;
  createdAt: Date;

  languages: string[];
  age: number;
  gender: string;
  favoriteGames: string[];
  otherGames: string[];
  preferenceCategories: string[];
  preferenceLanguages: string[];
  preferenceAgeRange: { min: number; max: number };
  preferenceGender: string;
  description?: string;
  liked?: string[];
  disliked?: string[];
}