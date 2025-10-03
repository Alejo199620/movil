import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";
import React from "react";

const StackLayout = () => {
    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
        if (canGoBack) {
            router.back();
        } else {
            navigation.dispatch(DrawerActions.toggleDrawer());
        }
    };

    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#4f46e5",
                    fontFamily: "Lato-Bold",
                },
                headerStyle: {
                    backgroundColor: "white",
                },
                contentStyle: {
                    backgroundColor: "white",
                },
                headerLeft: ({ canGoBack }) => (
                    <Ionicons
                        name={canGoBack ? "arrow-back-outline" : "grid-outline"}
                        size={22}
                        style={{ marginLeft: 15 }}
                        color="#4f46e5"
                        onPress={() => onHeaderLeftClick(canGoBack)}
                    />
                ),
            }}
        >

            <Stack.Screen
                name="(tabs)"
                options={{
                    headerShown: false,
                }}
            />


            <Stack.Screen
                name="(tabs)/home/index"
                options={{
                    title: "Inicio",
                }}
            />

            <Stack.Screen
                name="(tabs)/recetas/index"
                options={{
                    title: "Recetas",
                }}
            />

            <Stack.Screen
                name="(tabs)/favoritos/index"
                options={{
                    title: "Favoritos",
                }}
            />

            <Stack.Screen
                name="(tabs)/recetas/[id]"
                options={{
                    title: "Detalle",
                }}
            />
        </Stack>
    );
};

export default StackLayout;
