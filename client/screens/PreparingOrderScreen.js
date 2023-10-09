import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from'react';
import {View,Text, Image} from 'react-native';



const PreparingOrderScreen = () => {
    const navigate = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigate.navigate('Delivery')
        },5000)

    },[])

    return (
        <View className='flex-1 justify-center bg-white items-center'>
            <Image source={require('../assets/images/delivery.gif')} className='w-80 h-80'/>
        </View>
    );
};


export default PreparingOrderScreen;