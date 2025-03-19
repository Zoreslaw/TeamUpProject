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
    height: 95,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
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
    width: 100,
    height: 100,
  },
});
