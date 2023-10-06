import React from'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';
import { Feather } from "@expo/vector-icons";



const DishRow = ({dish}) => {

    return (
        <View style={{elevation:20}} className='flex-row items-center p-3 rounded-3xl bg-white shadow-3xl mb-3 mx-2'>
            <Image className='rounded-3xl w-[100px] h-[100px]' source={dish.image} />
            <View className="flex flex-1 space-y-3">
                <View className="pl-3">
                    <Text className="text-2xl font-bold capitalize">{dish.name}</Text>
                    <Text className="text-xl font-light text-slate-950">{dish.description}</Text>
                </View>
                <View className="flex-row justify-between pl-3 items-center">
                    <Text className="text-2xl font-bold capitalize">R{dish.price}</Text>
                    <View className="flex-row items-center mr-4 space-x-3">
                        <TouchableOpacity className='p-1 rounded-full bg-yellow-500'>
                            <Feather name='minus' color='white' size={25}/>
                        </TouchableOpacity>
                        <Text>2</Text>
                        <TouchableOpacity className='p-1 rounded-full bg-yellow-500'>
                            <Feather name='plus' color='white' size={25}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};


export default DishRow;