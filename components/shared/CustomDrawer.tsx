import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'

const CustomDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>

            <View className='flex justify-center items-center mx-3 p-10 mb-10 mt-10 h-[150px] rounded-xl bg-primary'>
                <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'>
                    <Text className='text-primary font-work-black text-3xl' >ACT</Text>
                </View>
            </View>

            {/* Aqui deberia de mostrar mis items*/}
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer