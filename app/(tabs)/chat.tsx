import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import SearchInput from '@/components/SearchInput';
import ChatCard from '@/components/ChatCard';
import { useAuth } from '@/hooks/useAuth';

interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadMessages: number;
  avatarUrl?: string;
  hasStatus: boolean;
  statusColor: string;
}

export default function Chat() {
  const backgroundColor = useThemeColor({}, "background");
  const { user } = useAuth();

  const chatData: ChatItem[] = [
    {
      id: '1',
      name: 'Kompot',
      lastMessage: 'Bro...',
      lastMessageTime: '11:20 am',
      unreadMessages: 1,
      hasStatus: true,
      statusColor: '#2CC069'
    },
    {
      id: '2',
      name: user?.displayName ?? "John Doe",
      lastMessage: 'Hello, how are you?',
      lastMessageTime: '12:00',
      unreadMessages: 120,
      avatarUrl: user?.photoURL ?? undefined,
      hasStatus: true,
      statusColor: '#2CC069'
    },
    {
      id: '3',
      name: user?.displayName ?? "John Doe",
      lastMessage: 'Hello, how are you?',
      lastMessageTime: '12:00',
      unreadMessages: 2,
      avatarUrl: user?.photoURL ?? undefined,
      hasStatus: true,
      statusColor: '#2CC069'
    },
    {
      id: '4',
      name: user?.displayName ?? "John Doe",
      lastMessage: 'Hello, how are you?',
      lastMessageTime: '12:00',
      unreadMessages: 2,
      avatarUrl: user?.photoURL ?? undefined,
      hasStatus: true,
      statusColor: '#2CC069'
    },
    {
      id: '5',
      name: user?.displayName ?? "John Doe",
      lastMessage: 'Hello, how are you?',
      lastMessageTime: '12:00',
      unreadMessages: 2,
      avatarUrl: user?.photoURL ?? undefined,
      hasStatus: true,
      statusColor: '#2CC069'
    },
    {
      id: '6',
      name: user?.displayName ?? "John Doe",
      lastMessage: 'Hello, how are you?',
      lastMessageTime: '12:00',
      unreadMessages: 2,
      avatarUrl: user?.photoURL ?? undefined,
      hasStatus: true,
      statusColor: '#2CC069'
    },
    {
      id: '7',
      name: user?.displayName ?? "John Doe",
      lastMessage: 'Hello, how are you?',
      lastMessageTime: '12:00',
      unreadMessages: 2,
      avatarUrl: user?.photoURL ?? undefined,
      hasStatus: true,
      statusColor: '#2CC069'
    },
    {
      id: '8',
      name: user?.displayName ?? "John Doe",
      lastMessage: 'Hello, how are you?',
      lastMessageTime: '12:00',
      unreadMessages: 2,
      avatarUrl: user?.photoURL ?? undefined,
      hasStatus: true,
      statusColor: '#2CC069'
    },
    {
      id: '9',
      name: user?.displayName ?? "John Doe",
      lastMessage: 'Hello, how are you?',
      lastMessageTime: '12:00',
      unreadMessages: 2,
      avatarUrl: user?.photoURL ?? undefined,
      hasStatus: true,
      statusColor: '#2CC069'
    },
    {
      id: '10',
      name: user?.displayName ?? "John Doe",
      lastMessage: 'Hello, how are you?',
      lastMessageTime: '12:00',
      unreadMessages: 2,
      avatarUrl: user?.photoURL ?? undefined,
      hasStatus: true,
      statusColor: '#2CC069'
    },
    // Add more chat items as needed
  ];

  const renderChatItem = ({ item }: { item: ChatItem }) => (
    <ChatCard
      name={item.name}
      lastMessage={item.lastMessage}
      lastMessageTime={item.lastMessageTime}
      unreadMessages={item.unreadMessages}
      onPress={() => {}}
      avatarUrl={item.avatarUrl}
      hasStatus={item.hasStatus}
      statusColor={item.statusColor}
    />
  );

  return (
    <View style={[styles.appContainer, { backgroundColor }]}>
      <View style={styles.chatsContainer}>
        <SearchInput placeholder="Search" onChangeText={() => {}} value="" />
        <FlatList
          data={chatData}
          renderItem={renderChatItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.chatCardsContainer}
          showsVerticalScrollIndicator={false}
          bounces={true}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={() => <View style={{ height: 16 }} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  chatsContainer: {
    flex: 1,
    marginTop: 16,
  },
  chatCardsContainer: {
    
  },
  separator: {
    height: 20,
  }
});

