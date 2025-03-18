import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NeonButton } from '@/components/button/NeonButton';
import { TabBar } from '@/components/TabBar';
import NeonBackground from '@/components/NeonBackground';
// import { HomeStatusBar } from '@/components/HomeStatusBar'; // if you want a custom status bar

export default function HomeScreen() {
  return (
    <NeonBackground>
      {/* If you have a custom status bar */}
      {/* <HomeStatusBar /> */}

      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Home</Text>
        <View style={styles.headerButtons}>
          {/* Example icons or toggles */}
        </View>
      </View>

      {/* "Find Teammate" button */}
      <NeonButton label="Find Teammate" style={styles.findTeammateButton} />

      {/* Custom Tab Bar at the bottom */}
      <TabBar />
    </NeonBackground>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 50,
    marginHorizontal: 24,
    height: 95,
    // etc...
  },
  headerTitle: {
    fontFamily: 'Roboto',
    fontSize: 29,
    fontWeight: '600',
    color: '#FFFFFF',
    textShadowColor: 'rgba(255, 255, 255, 0.4)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  headerButtons: {
    position: 'absolute',
    flexDirection: 'row',
    right: 24,
    top: 32,
  },
  findTeammateButton: {
    position: 'absolute',
    left: 100,
    top: 400,
    // or wherever you want
  },
});
