import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

/**
 * A custom Tab Bar, approximating your gradient background + icons.
 */
export function TabBar() {
  return (
    <View style={styles.tabBarContainer}>
      {/* Tab 1 */}
      <Pressable style={styles.tabItem}>
        <Text style={styles.tabItemText}>Home</Text>
      </Pressable>
      {/* Tab 2 */}
      <Pressable style={styles.tabItem}>
        <Text style={styles.tabItemText}>Chat</Text>
      </Pressable>
      {/* Tab 3 */}
      <Pressable style={styles.tabItem}>
        <Text style={styles.tabItemText}>Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 412, // matches your design
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    // approximate your gradient
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabItemText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
