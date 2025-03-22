import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { NeonButton } from '@/components/button/NeonButton';
import Button from '@/components/button/Button';
import NeonBackground from '@/components/NeonBackground';
import HomeTabHeader from '@/components/HomeTabHeader';
import { useAuth } from '@/hooks/useAuth';
// import { HomeStatusBar } from '@/components/HomeStatusBar'; // if you want a custom status bar
import { createRandomUser } from '@/utils/createRandomUser';
export default function HomeScreen() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleFindTeammate = async () => {
    // await signOut();
    // router.replace('/sign-in');


    router.push('/swipe');

  };

  return (
    <NeonBackground style={styles.container}>
      <HomeTabHeader />
      <View style={styles.appContainer}>
        <View style={styles.homeContainer}>
          <NeonButton label="Find Teammate" onPress={handleFindTeammate} />
        </View>
      </View>
    </NeonBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
  },
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100%',
  },
});
