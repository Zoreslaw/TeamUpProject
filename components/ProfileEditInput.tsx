import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

interface ProfileEditInputProps {
  placeholder: string;
  value?: string;
  onChangeText: (text: string) => void;
  isNumeric?: boolean;
  multiline?: boolean;
}

const ProfileEditInput: React.FC<ProfileEditInputProps> = ({
  placeholder,
  value,
  onChangeText,
  isNumeric = false,
  multiline = false,
}) => {
  const secondaryBackgroundColor = useThemeColor({}, 'secondaryBackground');
  const textColor = useThemeColor({}, 'text');
  const secondaryTextColor = useThemeColor({}, 'secondaryText');

  const [inputValue, setInputValue] = useState(value ?? '');

  useEffect(() => {
    setInputValue(value ?? '');
  }, [value]);

  const handleTextChange = (text: string) => {
    setInputValue(text);
    onChangeText(text);
  };

  return (
    <View style={[styles.textInputContainer, { backgroundColor: secondaryBackgroundColor }]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={secondaryTextColor}
        style={[styles.textInput, { color: textColor }]}
        value={inputValue}
        onChangeText={handleTextChange}

        inputMode={isNumeric ? 'numeric' : 'text'}
        keyboardType={isNumeric ? 'numeric' : 'default'}

        multiline={multiline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    minHeight: 50,
    justifyContent: 'center',
    borderColor: '#757575',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    flexGrow: 1,
    flexShrink: 1,
  },
  textInput: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '400',
    paddingVertical: 5,
  },
});

export default ProfileEditInput;
