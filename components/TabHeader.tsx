import { View, Text, StyleSheet } from "react-native";

type TabHeaderProps = {
  title: string;
}

export default function TabHeader({ title }: TabHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerButtons}>
      </View>
    </View>
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
});
