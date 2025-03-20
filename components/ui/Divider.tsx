import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export const Divider = () => {
  const secondaryBackgroundColor = useThemeColor({}, 'secondaryBackground');
  return <View style={[styles.divider, { backgroundColor: secondaryBackgroundColor }]} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
  },
});

