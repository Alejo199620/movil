import { toggleFavorito, useFavoritos } from "@/store/favoritos.store";
import type { Receta } from "@/store/recetas.store";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function RecipeCard({ recipe }: { recipe: Receta }) {
    const favoritos = useFavoritos(); // 👈 siempre actualizado
    const isFav = favoritos.includes(recipe.id);

    const handleFav = () => {
        toggleFavorito(recipe.id);
    };

    return (
        <Link href={`/recetas/${recipe.id}`} asChild>
            <TouchableOpacity>
                <View className="bg-white rounded-2xl shadow-lg p-3 mb-4 border border-gray-100">
                    <Image
                        source={recipe.imagen}
                        className="w-full h-40 rounded-xl mb-3"
                        resizeMode="cover"
                    />

                    <View className="flex-row justify-between items-start">
                        <View className="flex-1 mr-2">
                            <Text className="text-lg font-lato-bold text-gray-800 mb-1">
                                {recipe.nombre}
                            </Text>
                            <Text className="text-sm font-lato-regular text-secundary">
                                {recipe.region}
                            </Text>
                        </View>

                        <TouchableOpacity
                            onPress={handleFav}
                            className="p-2"
                            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        >
                            <Ionicons
                                name={isFav ? "heart" : "heart-outline"}
                                size={24}
                                color={isFav ? "#ef4444" : "#9ca3af"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    );
}
