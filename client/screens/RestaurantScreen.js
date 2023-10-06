import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";

const RestaurantScreen = () => {
  const { params } = useRoute();
  const navigate = useNavigation();
  let item = params;

  return (
    <SafeAreaView>
    <View>
    <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image className="h-72 w-full" source={item.image} />
          <TouchableOpacity
            onPress={() => navigate.goBack()}
            className="absolute top-5 left-2 bg-gray-50 p-2 rounded-full shadow-xl "
          >
            <Feather name="arrow-left" size={30} color={"orange"} />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-20  pt-10"
        >
          <View className="px-5">
            <Text className="text-3xl text-center text-orange-600 tracking-[3px] font-extrabold">
              {item.name}
            </Text>

            <View className="flex-row space-x-2">
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
              <View className="flex-row items-center space-x-1">
                <Feather name="map-pin" size={15} color="purple" />
                <Text>Nearby - {item.address}</Text>
              </View>
            </View>
            <Text className='mt-3 text-gray-600'>{item.description}</Text>
          </View>
        </View>


        <View className="pb-36 bg-white">
            <Text className='px-4 py-4 text-2xl font-bold tracking-[3px] uppercase'>Menu</Text>
            {/* Dishes */}

            {item.dishes.map((dish, index) => {

                return (
                    <DishRow key={index} dish={{...dish}} />
                )
            })}
        </View>
    </ScrollView>
    </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
