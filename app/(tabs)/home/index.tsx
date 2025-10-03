import CustomButton from '@/components/shared/CustomButton';
import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => {
    return (
        <View className="flex-1 justify-center px-10 bg-background pt-12">

            {/* Mensaje principal */}
            <Text className="text-3xl font-lato-black text-center mb-2 text-primary">
                ¡Bienvenido!
            </Text>

            {/* Subtítulo */}
            <Text className="text-lg font-lato-regular text-center mb-8 text-secundary-DEFAULT">
                Descubre recetas deliciosas y guarda tus favoritas
            </Text>

            {/* Botones */}
            <CustomButton
                color="primary"
                className="px-10 mb-4 font-lato-regular"
                onPress={() => router.push('/recetas')}
            >
                Ver Recetas
            </CustomButton>

            <CustomButton
                color="primary"
                className="px-10 font-lato-regular"
                onPress={() => router.push('/favoritos')}
            >
                Ver Favoritas
            </CustomButton>
        </View>
    );
};

export default HomeScreen;
