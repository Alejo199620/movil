import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './global.css';
SplashScreen.preventAutoHideAsync();
const RootLayout = () => {

    const [fontsLoaded, error] = useFonts({

        "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
        "Lato-Black": require("../assets/fonts/Lato-Black.ttf"),
        "Lato-Italic": require("../assets/fonts/Lato-Italic.ttf"),
        "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
    });


    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();

    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) return null;


    // return <Slot /> esto me muestra todo lo que tiene cargado el router como hijo osea siempre 
    // va a mostrar el index de cada carpeta ahora  va a ser un stack 
    // return <Stack />
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Slot />
        </GestureHandlerRootView>
    )
}


export default RootLayout