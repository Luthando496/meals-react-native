import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const CartIcon = () => {
    const navigate = useNavigation();
    const cartItems = useSelector(state=> state.cart.items)
    if(cartItems.length === 0){
      return
    }
    const totalAmount = cartItems.reduce((acc, item) => acc = acc + item.price,0)
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={()=> navigate.navigate("Cart")}
        style={{ elevation: 5 }}
        className="bg-yellow-400 flex-row justify-between items-center mx-5 rounded-full px-4 py-3"
      >
        <View className="py-2 px-4 rounded-full bg-lime-600/80">
          <Text className="text-2xl font-bold text-white">{cartItems.length}</Text>
        </View>
        <Text className="text-center text-white text-2xl  font-bold capitalize">
          View cart
        </Text>
        <Text className="text-center text-red-400 font-bold capitalize text-xl ">
          R {totalAmount}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
