import React,{useEffect,useState} from 'react';
import {View,Text, TouchableOpacity, Image,ScrollView, Pressable, StyleSheet} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { featured } from '../data';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useSelector,useDispatch } from 'react-redux';
import { removeToCart } from '../slices/cartSlice';


const CartScreen = () => {
    const {restaurant} = useSelector(state => state.rest)
    const dispatch = useDispatch()
    const cartItems = useSelector(state=> state.cart.items)
    const totalAmount = cartItems.reduce((acc, item) => acc = acc + item.price,0)
    const navigate = useNavigation()
    const [grouped ,setGrouped] =useState({})

    useEffect(()=>{
        const items = cartItems.reduce((group,item)=>{
            if(group[item.id]){
                group[item.id].push(item)
            }else{
            group[item.id] = [item]
            }
            return group
        },{})
        setGrouped(items)
    },[cartItems])
    const handleRemove =(id)=>{
    dispatch(removeToCart({id:id}))
    }

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

            {/* Dishes */}
            

            <ScrollView 
            showsVerticalScrollIndicator={false}
        className="bg-white pt-5"
       contentContainerStyle={{
        paddingBottom: 50
       }}
       
       >
            {Object.entries(grouped).map(([key, items]) => {
                const {image,name,price,id} = items[0]

                return(
                    <View style={{elevation:20}} key={key} className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-xl mx-2 mb-3">
                        <Text className="font-bold text-amber-500">{items.length} x</Text>
                        <Image className='w-14 h-14 rounded-full' source={image} />
                        <Text className="font-bold text-pink-500 uppercase flex-1">{name}</Text>
                        <Text className="font-bold text-amber-500 ">R {price}</Text>
                        <TouchableOpacity onPress={()=>handleRemove(id)} className='p-2 rounded-full bg-amber-200'>
                            <Feather  name='minus' size={25} color={'white'} />
                        </TouchableOpacity>
                        
                    </View>
                )
            })}
            </ScrollView>

            {/* dishes end  */}

            {/* totals */}

            <View className="bg-teal-100 p-6 px-8 rounded-t-3xl space-y-4">
            <View className="flex-row justify-between">
                <Text className="text-gray-700">Subtotal</Text>
                <Text className="text-gray-700">R  788</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-gray-700">Delivery Fee</Text>
                <Text className="text-gray-700">R 889</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="font-extrabold">Order Total</Text>
                <Text className="font-extrabold">R {totalAmount}</Text>
            </View>
            <View>
                <TouchableOpacity 
                onPress={()=> navigate.navigate('PreparingOrder')} 
                className="p-3 rounded-full bg-orange-500">
                    <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                </TouchableOpacity>
            </View>
       </View>

            </View>
         </SafeAreaView>
    );
};


const style = StyleSheet.create({
    opacity:{
        opacity:0.5
    }
})

export default CartScreen;