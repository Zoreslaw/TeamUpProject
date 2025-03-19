import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useAuth } from '@/hooks/useAuth';
import { useConversations } from '@/hooks/useConversations';
import SearchInput from '@/components/SearchInput';
import ChatCard from '@/components/ChatCard';
import ChatCardPlaceholder from '@/components/ChatCardPlaceholder';

export default function Chat() {
  const backgroundColor = useThemeColor({}, 'background');
  const { user } = useAuth();

  // This hook queries Firestore in real time
  const { conversations, loading, error } = useConversations();

  // useEffect(() => {
  //   setChatData(conversations);
  // }, [conversations]);

  // Render function for each conversation item
  const renderChatItem = ({ item }: any) => (
    <ChatCard
      name={item.name}
      lastMessage={item.lastMessage}
      lastMessageTime={item.lastMessageTime}
      unreadMessages={item.unreadMessages}
      onPress={() => {
        // e.g., navigate to conversation details
      }}
      avatarUrl={item.avatarUrl}
      hasStatus={item.hasStatus}
      statusColor={item.statusColor}
    />
  );

  // Show a simple loading state while data is being fetched
  if (loading) {
    // For example, show 5 placeholders
    return (
      <View style={[styles.appContainer, { backgroundColor, paddingTop: 16 }]}>
        <SearchInput placeholder="Search" onChangeText={() => {}} value="" />
        <FlatList
          data={[1, 2, 3, 4, 5]} // dummy data to generate placeholders
          renderItem={() => <ChatCardPlaceholder />}
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={styles.chatCardsContainer}
          showsVerticalScrollIndicator={false}
          bounces={true}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={() => <View style={{ height: 16 }} />}
        />
      </View>
    );
  }

  // Show an error if something went wrong
  if (error) {
    return (
      <View style={[styles.appContainer, { backgroundColor, justifyContent: 'center', alignItems: 'center' }]}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.appContainer, { backgroundColor }]}>
      <View style={styles.chatsContainer}>
        <SearchInput placeholder="Search" onChangeText={() => {}} value="" />
        
        <FlatList
          data={conversations}
          renderItem={renderChatItem}
          keyExtractor={(item) => item.id}
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
  chatCardsContainer: {},
  separator: {
    height: 20,
  },
});
