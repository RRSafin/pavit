import React, { useCallback, useEffect } from "react";
import {StatusBar, StyleSheet, SafeAreaView, Platform} from 'react-native';
import { useFonts } from 'expo-font';
import MainStack from "./navigate";
import * as SplashScreen from 'expo-splash-screen';
import { useNetInfo } from "@react-native-community/netinfo";
import Disconnect from "./components/Disconnect";


export default function App() {

  const netInfo = useNetInfo().isConnected;

  const [fontsLoaded] = useFonts({
    'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'mt-light': require('./assets/fonts/Montserrat-Light.ttf'),
    'mt-semi': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (netInfo !== false) {
    return (
        <SafeAreaView style={styles.mainBlock} onLayout={onLayoutRootView}>
          <MainStack />
        </SafeAreaView>
    )
  } else {
    return (
        <SafeAreaView style={styles.mainBlock} onLayout={onLayoutRootView}>
          <Disconnect />
        </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  mainBlock: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
})
