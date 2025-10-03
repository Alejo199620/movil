import { getRecetas } from "@/store/recetas.store";
import { useRouter } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";

export default function RecetasScreen() {
    const recetas = getRecetas();
    const router = useRouter();

    return (
        <FlatList
            data={recetas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={{
                        margin: 10,
                        padding: 10,
                        backgroundColor: "#fff",
                        borderRadius: 8,
                    }}
                    onPress={() => router.push(`/recetas/${item.id}`)}
                >
                    <Image
                        source={item.imagen}
                        style={{ width: "100%", height: 150, borderRadius: 8 }}
                    />
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 8 }}>
                        {item.nombre}
                    </Text>
                    <Text style={{ color: "gray" }}>{item.region}</Text>
                </TouchableOpacity>
            )}
        />
    );
}
