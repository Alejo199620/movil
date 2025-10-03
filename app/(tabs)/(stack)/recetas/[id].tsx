import { isFavorito, toggleFavorito } from "@/store/favoritos.store";
import { getRecetas } from "@/store/recetas.store";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function RecetaDetalleScreen() {
    const { id } = useLocalSearchParams();
    const receta = getRecetas().find((r) => r.id === id);

    const [favorito, setFavorito] = useState(isFavorito(id as string));

    if (!receta) return <Text>Receta no encontrada</Text>;

    const handleFavorito = () => {
        toggleFavorito(receta.id);
        setFavorito(isFavorito(receta.id));
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <Image
                source={receta.imagen}
                style={{ width: "100%", height: 250 }}
                resizeMode="cover"
            />
            <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>{receta.nombre}</Text>
                <Text style={{ fontSize: 16, color: "gray", marginBottom: 10 }}>
                    {receta.region}
                </Text>

                <TouchableOpacity
                    onPress={handleFavorito}
                    style={{
                        backgroundColor: favorito ? "#ff4d4d" : "#ddd",
                        padding: 10,
                        borderRadius: 8,
                        marginBottom: 16,
                    }}
                >
                    <Text style={{ textAlign: "center", color: favorito ? "white" : "black" }}>
                        {favorito ? "★ Quitar de favoritos" : "☆ Agregar a favoritos"}
                    </Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
                    Ingredientes:
                </Text>
                {receta.ingredientes.map((ing, idx) => (
                    <Text key={idx} style={{ fontSize: 16 }}>
                        • {ing}
                    </Text>
                ))}
            </View>
        </ScrollView>
    );
}
