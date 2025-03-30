import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

type SubmitButtonProps = {
  label: string;
  style?: ViewStyle;
  onPress: () => void;
}

export function SubmitButton({ label, style, onPress }: SubmitButtonProps) {
  const secondaryBackgroundColor = useThemeColor({}, 'secondaryBackground');
  const textColor = useThemeColor({}, 'text');

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        [styles.buttonbase, { backgroundColor: secondaryBackgroundColor }],
        pressed && styles.buttonPressed,
        style,
      ]}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonbase: {
    width: 150,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 300,

  },
  buttonPressed: {
    opacity: 0.5,
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: 0,
  }
})