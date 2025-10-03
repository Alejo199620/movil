import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "indigo",
            }}
        >
            <Tabs.Screen
                name="home/index"
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="(stack)"
                options={{
                    title: "Recetas",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="fast-food-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="favoritos/index"
                options={{
                    title: "Favoritos",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="heart" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
