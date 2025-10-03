import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
    children: string;
    color?: 'primary' | 'secundary' | 'tertiary';
    variant?: 'contained' | 'text-only';
    className?: string;
}
const CustomButton = ({
    children,
    color = 'primary',
    onPress,
    onLongPress,
    variant = 'contained',
    className
}: Props) => {
    const btnColor = {
        primary: 'bg-primary',
        secundary: 'bg-secundary',
        tertiary: 'bg-terciary'
    }[color];
    const textColor = {
        primary: 'text-primary',
        secundary: 'text-secundary-100',
        tertiary: 'text-terciary'
    }[color];
    if (variant === 'text-only')
        return (
            <Pressable
                className={`p-3 ${className}`}
                onPress={onPress}
                onLongPress={onLongPress}
            >
                <Text className={`text-center ${textColor} font-work-medium text-2xl`}>
                    {children}
                </Text>
            </Pressable >
        )

    return (
        <Pressable
            className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text className={`text-center  text-white  font-work-medium text-2xl`}>
                {children}
            </Text>
        </Pressable >
    )
}

export default CustomButton