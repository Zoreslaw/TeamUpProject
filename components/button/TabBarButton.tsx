import { TouchableOpacity, ViewStyle, Text, StyleSheet, StyleProp } from "react-native";
import { SvgProps } from "react-native-svg";
import HomeIcon from "../svgs/HomeIcon";
import ChatIcon from "../svgs/ChatIcon";
import ProfileIcon from "../svgs/ProfileIcon";

interface TabBarButtonProps {
  label: string;
  onPress: () => void;
  isActive: boolean;
  tabName: string;
}

const getIcon = (tabName: string, isActive: boolean, style?: StyleProp<ViewStyle>) => {
    console.log(tabName, isActive);

  switch (tabName) {
    case 'home':
      return <HomeIcon fill={isActive ? "#000000" : "#B8B8B8" } style={style} />;
    case 'chat':
      return <ChatIcon stroke={isActive ? "#000000" : "#B8B8B8"} style={style} />;
    case 'profile':
      return <ProfileIcon stroke={isActive ? "#000000" : "#B8B8B8"} style={style} />;
    default:
      return <HomeIcon fill={isActive ? "#000000" : "#B8B8B8"} style={style} />;
  }
};

export const TabBarButton = ({ label, onPress, isActive, tabName }: TabBarButtonProps) => {
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[styles.button, isActive && styles.activeButton]}
    >
        {getIcon(tabName, isActive, styles.icon)}
        {isActive && <Text style={[styles.label, isActive && styles.activeLabel]}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 16,
    gap: 8,
  },
  activeButton: {
    backgroundColor: '#B8B8B8',
  },
  label: {
    fontFamily: 'Open Sans Hebrew',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16,
    color: '#000000',
  },
  activeLabel: {
    color: '#000000',
  },
  activeIcon: {
    color: '#000000',
  },
});



