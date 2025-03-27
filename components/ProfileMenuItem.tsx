import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from './ui/Divider';
import { Feather, Ionicons } from '@expo/vector-icons';

interface ProfileMenuItemProps {
  title: string;
  iconName: string;
  isPressed: boolean;
  onPress: () => void;
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({
  title,
  iconName,
  isPressed,
  onPress,
}) => {
  return(
    <View>
      <Divider />
      <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
        <View style={styles.leftSection}>
          {iconName === "game-controller-outline" ? <Ionicons name={iconName} size={24} color="#757575" style={styles.itemIcon} /> : <Feather name={iconName} size={24} color="#757575" style={styles.itemIcon} />}
          <Text style={styles.itemText}>{title}</Text>
        </View>
        <Feather name={ isPressed ? "chevron-up" : "chevron-down" } size={20} color="#757575" />
      </TouchableOpacity>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#000000',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    marginRight: 12,
  },
  itemText: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
  },
})

export default ProfileMenuItem;