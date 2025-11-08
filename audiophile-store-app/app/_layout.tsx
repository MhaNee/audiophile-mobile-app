import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        // Hide header for ALL screens in this stack
        headerShown: false,
      }}
    >
      {/* Screens still need to be declared for routing */}
      <Stack.Screen name="index" />
      <Stack.Screen name="headphones" />
      <Stack.Screen name="speakers" />
      <Stack.Screen name="earphones" />
    </Stack>
  );
}
