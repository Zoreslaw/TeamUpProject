import { Stack } from "expo-router";

export default function SwipeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="swipe" />
    </Stack>
  );
}
