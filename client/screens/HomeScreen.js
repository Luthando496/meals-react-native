import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View,Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import {Feather} from '@expo/vector-icons';


const HomeScreen = () => {

    return (
        <SafeAreaView className='bg-white'>
        <StatusBar  style='dark' />
        {/* search bar */}
        <View className="flex-row items-center mx-4 pb-2">
            <View className="flex-row flex-1 items-center p-3 rounded-full border-gray-400 border">
                <Feather name="search" size={27} color="gray" />
                <TextInput placeholder='Search Restaurant Meal' className='ml-3 flex-1 text-gray-500'  />
                <View className='flex-row items-center space-x-2 border-0 border-l-2 pl-2 border-gray-500'>
                    <Feather name="map-pin" size={27} color="pink" />
                    <Text className='text-orange-400'>Cape Town,WC</Text>
                </View>
            </View>
        </View>
        </SafeAreaView>
    );
};


export default HomeScreen;