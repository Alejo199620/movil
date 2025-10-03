import CustomButton from '@/components/shared/CustomButton';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const HomeScreen = () => {
    return (
        <View className="px-10">

            <CustomButton
                color="primary"
                className="px-10 mt-5"
                onPress={() => router.push('/recetas')}
            >
                Ver Recetas
            </CustomButton>

            <CustomButton
                color="primary"
                className="px-10 mt-5"
                onPress={() => router.push('/favoritos')}
            >
                Ver Favoritas
            </CustomButton>

        </View>
    );
};

export default HomeScreen;
