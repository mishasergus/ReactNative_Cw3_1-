import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    ScrollView,
    Button,
  Image, 
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContent';
import { RadioButton } from '@/components/RadioButton';
import { OptionButton } from '@/components/OptionButton';


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

export default function ExploreScreen() {
    const { theme } = useTheme()!;
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<any>();
    const [goal, setGoal] = useState('lose');

    const colors = theme === 'dark' ? THEMES.dark : THEMES.light;
    const styles = createStyles(colors, insets.top, insets.bottom);

    return (
    <ScrollView 
    style={styles.container} 
    contentContainerStyle={styles.contentContainer} 
    showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Яка твоя ціль?</Text>
      <View style={styles.list}>
        <RadioButton label="Втратити вагу" selected={goal === 'lose'} onPress={() => setGoal('lose')} />
        <RadioButton label="Підтримувати  вагу" selected={goal === 'keep'} onPress={() => setGoal('keep')} />
        <RadioButton label="Набирати м’язову вагу" selected={goal === 'get'} onPress={() => setGoal('get')} />
      </View>
      <Text style={styles.subtitle}>Складений план харчування</Text>
      <View style={styles.list}>
        <OptionButton label="Сніданок" source={require('../../assets/breakfast.png')} onPress={() => navigation.navigate('Favorites')} />
        <OptionButton label="Обід" source={require('../../assets/lunch.png')} onPress={() => navigation.navigate('Favorites')} />
        <OptionButton label="Вечеря" source={require('../../assets/dinner.png')} onPress={() => navigation.navigate('Favorites')} />
      </View>
    </ScrollView>
  );
}

const createStyles = (
  colors: typeof THEMES.light,
  topInset: number,
  bottomInset: number
) => {
  const safeBottom = bottomInset > 0 ? bottomInset : 12;
  const bottomScrollPadding = safeBottom + 96;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    contentContainer: {

      flexGrow: 1,
      alignItems: 'center',
      paddingTop: Math.max(topInset, 24) + 32,
      paddingHorizontal: 24,
      paddingBottom: bottomScrollPadding,
    },
    list: {
      width: '100%',
      gap: 14,
    },
    subtitle: {
      fontFamily: 'Poppins',
      fontSize: 18,
      lineHeight: 26,
      fontWeight: '700',
      color: colors.title,
      textAlign: 'center',
      marginTop: 28,
    },
    title: {
      fontFamily: 'Poppins',
      fontSize: 34,
      lineHeight: 42,
      fontWeight: '700',
      color: colors.title,
      textAlign: 'center',
      marginBottom: 24,
    },
  });
};