import React from'react';
import {View,Text, TouchableOpacity, Image} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { featured } from '../data';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


const CartScreen = () => {

    const restaurant = featured.restaurants[0]
    const navigate = useNavigation()

    return (
        <SafeAreaView style={{flex:1}}>
        <StatusBar style='dark'  />
            <View className='bg-white flex-1 rounded-t-2xl'>
            {/* Back button */}
            <View className="relative py-4 ">
                <TouchableOpacity style={{elevation:8}} onPress={()=> navigate.goBack()} className='absolute bg-amber-400 rounded-3xl z-10 top-5 left-2'>
                    <Feather name="arrow-left" size={39} color={"white"} />
                </TouchableOpacity>

                <View>
                    <Text className="text-center text-amber-600 font-bold text-3xl">Your cart</Text>
                    <Text className="text-center text-gray-500 font-bold text-xl">{restaurant.name}</Text>
                </View>
            </View>

            {/* Delivery Time */}

            <View className="bg-pink-300/70 flex-row px-4 space-x-2 items-center">
                <Image className='w-20 h-20 rounded-full' source={require('../assets/images/bikeGuy.png')} />
                <Text className="flex-1  font-light">Delivery in 20-30 minutes</Text>
                <TouchableOpacity className=''>
                <Text className=' text-amber-700 text-lg font-bold'>Change</Text>
                </TouchableOpacity>

            </View>

            </View>
        </SafeAreaView>
    );
};


export default CartScreen;