import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { Text, View, StyleSheet, Touchable, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { styles } from './Global-styles';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Alert.alert('Button touched!')}>
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, minima voluptatum doloremque numquam omnis fugiat, est porro quae totam sed aut libero rerum incidunt accusantium? Quibusdam officiis numquam sequi harum?</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
