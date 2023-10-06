import React from'react';
import {View,Text, TouchableOpacity} from 'react-native';



const CartIcon = () => {

    return (
        <View className='absolute bottom-5 w-full z-50'>
            <TouchableOpacity style={{elevation:5}} className='bg-yellow-400 flex-row justify-between items-center mx-5 rounded-full px-4 py-3'>
            <View className="py-2 px-4 rounded-full bg-lime-600/80">
                <Text className='text-2xl font-bold text-white'>3</Text>
            </View>
            <Text className="text-center text-white text-2xl  font-bold capitalize">View cart</Text>
            <Text className="text-center text-red-400 font-bold capitalize text-xl ">R 78</Text>
            </TouchableOpacity>
        </View>
    );
};


export default CartIcon;