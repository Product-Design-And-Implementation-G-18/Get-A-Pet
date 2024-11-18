import {useFonts} from "expo-font"; 
import { Stack } from "expo-router";
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

export default function RootLayout() {
  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),


  })


  return (
    <ClerkProvider publishableKey={publishableKey}>
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/index" 
      options={{ 
         headerShown: false }} />
    
    </Stack>
    </ClerkProvider>
  );
}
