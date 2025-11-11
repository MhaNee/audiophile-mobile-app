import { Stack } from "expo-router";
import { CartProvider } from "./context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
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
    </CartProvider>
  );
}
