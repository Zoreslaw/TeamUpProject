import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

type TabHeaderProps = {
  title?: string;
}

export default function HomeTabHeader({ title = "Home" }: TabHeaderProps) {
  return (
    <LinearGradient
      colors={['#000000', 'rgba(34, 0, 14, 0.4)', 'rgba(0, 0, 0, 0.2)', 'rgba(255, 0, 102, 0)']}
      locations={[0, 0.504, 0.689, 1]}
      style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerButtons}>
        <TouchableOpacity style={styles.iconButton}>
          {/* Notification Icon */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          {/* Mode Icon */}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    width: '100%',
    height: 95,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.02,
    shadowRadius: 24,
    elevation: 5,
  },
  headerTitle: {
    position: 'absolute',
    left: 24,
    top: 34,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 29,
    lineHeight: 38,
    color: '#FFFFFF',
    textShadowColor: 'rgba(255, 255, 255, 0.4)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  headerButtons: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    right: 24,
    top: 32,
    height: 42,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 20,
  },
  iconButton: {
    width: 42,
    height: 42,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
