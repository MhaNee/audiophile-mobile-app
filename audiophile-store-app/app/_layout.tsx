import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Hide the header for the index (home) route */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
