import { isFavorito, toggleFavorito } from "@/store/favoritos.store";
import { getRecetas } from "@/store/recetas.store";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function RecetaDetalleScreen() {
    const { id } = useLocalSearchParams();
    const receta = getRecetas().find((r) => r.id === id);

    const [favorito, setFavorito] = useState(isFavorito(id as string));

    if (!receta) return <Text className="text-center mt-10">Receta no encontrada</Text>;

    const handleFavorito = () => {
        toggleFavorito(receta.id);
        setFavorito(isFavorito(receta.id));
    };

    return (
        <ScrollView className="flex-1 bg-background">
            <Image
                source={receta.imagen}
                className="w-full h-64"
                resizeMode="cover"
            />
            <View className="p-4">
                <Text className="text-2xl font-lato-bold mb-2">
                    {receta.nombre}
                </Text>
                <Text className="text-base text-gray-500 mb-4">
                    {receta.region}
                </Text>

                <TouchableOpacity
                    onPress={handleFavorito}
                    className={`py-3 rounded-lg mb-4 ${favorito ? 'bg-[#ff4d4d]' : 'bg-gray-300'}`}
                >
                    <Text className={`text-center ${favorito ? 'text-white' : 'text-black'} font-lato-regular`}>
                        {favorito ? "★ Quitar de favoritos" : "☆ Agregar a favoritos"}
                    </Text>
                </TouchableOpacity>

                <Text className="text-lg font-lato-bold mb-2">
                    Ingredientes:
                </Text>
                {receta.ingredientes.map((ing, idx) => (
                    <Text key={idx} className="text-base mb-1 font-lato-regular">
                        • {ing}
                    </Text>
                ))}
            </View>
        </ScrollView>
    );
}
