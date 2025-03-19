import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useAuth } from '@/hooks/useAuth';

export interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadMessages: number;
  avatarUrl?: string;
  hasStatus: boolean;
  statusColor: string;
}

interface UseConversationsResult {
  conversations: ChatItem[];
  loading: boolean;
  error: string | null;
}

export function useConversations(): UseConversationsResult {
  const { user } = useAuth();
  const [conversations, setConversations] = useState<ChatItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      setConversations([]);
      return;
    }

    const unsubscribe = firestore()
      .collection('conversations')
      .where('participantIds', 'array-contains', user.uid)
      .orderBy('lastUpdatedAt', 'desc')
      .onSnapshot(
        async (snapshot) => {
          try {
            const items = await Promise.all(
              snapshot.docs.map(async (doc) => {
                const data = doc.data() || {};
                const lastMsg = data.lastMessage || {};

                console.log('Conversation doc:', doc.id, data.participants);

                const lastMessageText = lastMsg.message || '';
                const lastMessageTime = lastMsg.timestamp
                ? new Date(lastMsg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                : '';

                // placeholder for now
                const unreadMessages = 0;

                let otherUserName = 'Unknown';
                let otherUserAvatar: string | undefined;

                // participants is an array of strings like "/users/abc123"
                const participantRefs = data.participants || [];


                // find the one that doesn't match the current user
                // For instance, if user.uid is "FoUDBEnZdZfwFlpa7xIAblUmMYZ"
                // we check which path doesn't contain that string
                const otherRef = participantRefs.find((ref: any) => ref.id !== user.uid);

                if (otherRef) {
                    // fetch user doc
                    const userDocSnap = await otherRef.get();
                    const userData = userDocSnap.data();
                    if (userData) {
                      otherUserName = userData.displayName || 'Anonymous';
                      otherUserAvatar = userData.photoURL || undefined;
                    }
                }

                return {
                  id: doc.id,
                  name: otherUserName,
                  lastMessage: lastMessageText,
                  lastMessageTime,
                  unreadMessages,
                  avatarUrl: otherUserAvatar,
                  hasStatus: true,
                  statusColor: '#2CC069',
                };
              })
            );

            setConversations(items);
            setLoading(false);
          } catch (err: any) {
            console.error('Error fetching user docs:', err);
            setError(err.message);
            setLoading(false);
          }
        },
        (err) => {
          console.error('Error fetching conversations:', err);
          setError(err.message);
          setLoading(false);
        }
      );

    return () => unsubscribe();
  }, [user]);

  return { conversations, loading, error };
}
