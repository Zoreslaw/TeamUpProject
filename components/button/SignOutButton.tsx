import React from 'react';
import { View, Pressable, Text, StyleSheet, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useThemeColor } from '@/hooks/useThemeColor';

type SignOutButtonProps = {
  label: string;
  IconLeft?: React.ComponentType<{
    size: number;
    color: string;
    style: ViewStyle;
  }>;
  style?: ViewStyle;
  onPress?: () => void;
}

export function SignOutButton({ label, style, onPress }: SignOutButtonProps) {
  const backgroundColor = useThemeColor({}, 'background');
  const secondaryBackgroundColor = useThemeColor({}, 'secondaryBackground');
  const textColor = useThemeColor({}, 'text');

  return (
    <View style={[styles.buttonContainer, { backgroundColor: backgroundColor }]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          [styles.buttonbase, { backgroundColor: secondaryBackgroundColor }],
          pressed && styles.buttonPressed,
          style,
        ]}
      >
        <Feather name="log-out" size={24} color={textColor} />
        <Text style={[styles.buttonText, { color: textColor }]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 250,
    height: 50,
    borderRadius: 300,
    marginBottom: 10,
  },
  buttonbase: {
    width: 250,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 300,
    paddingLeft: 30,

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
    marginLeft: 32,
  }
})