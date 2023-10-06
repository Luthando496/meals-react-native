import React from "react";
import { View, Text,Image,Pressable, TouchableWithoutFeedback, StyleSheet } from "react-native";
import {Feather} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const RestaurantCard = ({ item }) => {
    const navigate = useNavigation();
  return (
    <TouchableWithoutFeedback style={({pressed})=> pressed && style.press} onPress={()=> navigate.navigate('Restaurant',{...item})}>
      <View
        style={{ elevation: 8 }}
        className="mr-6 bg-white rounded-3xl shadow-3xl my-3"
      >
        <Image className="h-36 w-64 rounded-t-2xl" resizeMode="contain" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-xl pt-2 font-bold">{item.name}</Text>
          <View className="flex-row item-center space-x-1">
            <Image
              className="h-4 w-4 rounded-full"
              source={require("../assets/images/fullStar.png")}
            />
            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>
              <Text className="text-gray-400">
                ({item.reviews} reviews) -{" "}
                <Text className="text-yellow-500">{item.category}</Text>
              </Text>
            </Text>
          </View>
        <View className='flex-row items-center space-x-1'>
            <Feather name="map-pin" size={15} color='purple'    />
            <Text>Nearby - {item.address}</Text>
        </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};


const style = StyleSheet.create({
    press:{
        opacity:0.8
    }
})

export default RestaurantCard;
