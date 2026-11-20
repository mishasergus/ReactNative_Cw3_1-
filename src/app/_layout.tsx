import { Stack } from 'expo-router';
import { ThemeProvider } from '../context/ThemeContent';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack screenOptions={{ headerShown: false }} />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
