import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Screens
import { useTheme } from '../context/ThemeContent';
import ExploreScreen from '../screens/ExploreScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();


const TABS: Record<string, { label: string; icon: string }> = {
  Home: { label: 'План\nхарчування', icon: 'clipboard-list' },
  Explore: { label: 'Меню', icon: 'carrot' },
  Favorites: { label: 'Щоденник\nкалорій', icon: 'book' },
  Profile: { label: 'Порада\nдня', icon: 'lightbulb' },
};

const THEMES = {
  light: {
    primary: '#171512',
    muted: '#171512',
    accent: '#477A4E',
    card: '#F5EBDD',
    surface: '#FFFCF6',
    border: '#75839A',
  },
  dark: {
    primary: '#F7F1E7',
    muted: '#F7F1E7',
    accent: '#A7D39B',
    card: '#1C1B19',
    surface: '#292724',
    border: '#545B67',
  },
};

export default function router() {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme()!;

  const colors = theme === 'dark' ? THEMES.dark : THEMES.light;
  const styles = createStyles(colors, insets.bottom);

  return (
    <View style={styles.root}>
      <Tab.Navigator
        screenOptions={({ route }) => {
          const { label, icon } = TABS[route.name];
          return {
            headerShown: false, 
            animation: 'none',
            sceneStyle: styles.sceneBackground,
            tabBarLabel: label,
            tabBarLabelPosition: 'below-icon', 
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.muted,
            tabBarLabelStyle: styles.tabBarLabel,
            tabBarItemStyle: styles.tabBarItem,
            tabBarIconStyle: styles.tabBarIcon,
            tabBarStyle: styles.tabBar,
            tabBarBackground: () => (
              <View pointerEvents="none" style={styles.tabBarBackground}>
                <View style={styles.tabBarSurface} />
              </View>
            ),
            tabBarIcon: ({ focused, color }) => (
              <FontAwesome5 
                name={icon} 
                size={30} 
                color={focused ? colors.accent : color} 
                solid={focused} 
              />
            ),
          };
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}

const createStyles = (colors: typeof THEMES.light, bottomInset: number) => {
  const safeBottom = bottomInset > 0 ? bottomInset : 12;
  const barHeight = 76 + safeBottom;
  
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: colors.card,
    },
    tabBar: {
      height: barHeight,
      paddingTop: 8,
      paddingBottom: safeBottom,
      paddingHorizontal: 14,
      backgroundColor: 'transparent',
      borderTopWidth: 0,
      borderLeftWidth: 0, 
      borderRightWidth: 0,
      borderBottomWidth: 0,
      elevation: 0,
      
    },
    sceneBackground: {
      backgroundColor: colors.card,
    },
    tabBarBackground: {
      ...StyleSheet.absoluteFill,
    },
    tabBarSurface: {
      position: 'absolute',
      top: 10,
      left: 14,
      right: 14,
      bottom: safeBottom,
      borderRadius: 18,
      backgroundColor: colors.surface,
      shadowColor: '#71634F',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.12,
      shadowRadius: 10,
      elevation: 3,
    },
    tabBarItem: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 4,
    },
    tabBarIcon: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 2,
    },
    tabBarLabel: {
      marginTop: 4,
      fontSize: 14,
      lineHeight: 19,
      fontWeight: '500',
      textAlign: 'center',
    },
  });
};