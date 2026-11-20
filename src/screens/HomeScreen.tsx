import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Image, 
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContent';

const THEMES = {
  light: {
    background: '#EFE5D7', 
    title: '#1A1816',
    buttonBg: '#946B49',
    buttonText: '#FFFDF9',
    blobBg: '#DFD2C0',
  },
  dark: {
    background: '#1C1B19',
    title: '#F7F1E7',
    buttonBg: '#A87B56',
    buttonText: '#171512',
    blobBg: '#292724',
  },
};

export default function HomeScreen() {
    const { theme } = useTheme()!;
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<any>();

    const colors = theme === 'dark' ? THEMES.dark : THEMES.light;
    const styles = createStyles(colors, insets.top);

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Вітаю, Олексію!</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => navigation.navigate('Explore')}
      >
        <Text style={styles.buttonText}>Почати</Text>
      </Pressable>

      <View style={styles.illustrationWrapper}>
        <View style={styles.blob} />
        <Image
          source={require('../../assets/avocado-illustration.png')}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const createStyles = (colors: typeof THEMES.light, topInset: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      paddingTop: Math.max(topInset, 24) + 56,
      paddingHorizontal: 24,
    },
    title: {
      fontFamily: 'Poppins',
      fontSize: 34,
      lineHeight: 42,
      fontWeight: '700',
      color: colors.title, 
      textAlign: 'center',
      marginBottom: 28,
    },
    button: {
      backgroundColor: colors.buttonBg,
      paddingVertical: 14,
      paddingHorizontal: 56,
      borderRadius: 999,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 36,
    },
    buttonPressed: {
      opacity: 0.85,
      transform: [{ scale: 0.98 }],
    },
    buttonText: {
      fontFamily: 'Poppins',
      fontSize: 18,
      fontWeight: '600',
      color: colors.buttonText,
      textAlign: 'center',
    },
    illustrationWrapper: {
      width: '100%',
      maxWidth: 340,
      height: 290,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    blob: {
      position: 'absolute',
      width: 240,
      height: 210,
      borderRadius: 110,
      backgroundColor: 'transparent',
      transform: [{ rotate: '-12deg' }],
    },
    illustration: {
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
  });