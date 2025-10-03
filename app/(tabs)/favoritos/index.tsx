import RecipeCard from "@/components/shared/RecipeCard";
import { useFavoritos } from "@/store/favoritos.store"; // 👈 nuevo hook
import { getRecetas } from "@/store/recetas.store";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";

export default function FavoritosIndex() {
    const favoritosIds = useFavoritos(); // 👈 siempre actualizado
    const recetas = getRecetas();
    const favoritas = recetas.filter((r) => favoritosIds.includes(r.id));

    if (favoritas.length === 0) {
        return (
            <View className="flex-1 items-center justify-center bg-background px-4">
                <Ionicons name="heart-outline" size={64} color="#9ca3af" />
                <Text className="text-gray-500 text-lg text-center mt-4">
                    No tienes recetas favoritas aún
                </Text>
                <Text className="text-gray-400 text-sm text-center mt-2">
                    Agrega algunas recetas a tus favoritos para verlas aquí
                </Text>
            </View>
        );
    }

    return (
        <View className="flex-1 bg-background p-4">
            <Text className="text-2xl font-bold text-primary mb-4">
                Tus Favoritas ({favoritas.length})
            </Text>

            <FlatList
                data={favoritas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <RecipeCard recipe={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
