import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { featured } from "../data";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";

const DeliveryScreen = () => {
  const restaurant = useSelector(state=> state.rest.restaurant)
  const navigate = useNavigation();

  return (
    <View className="flex-1">
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="satellite"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
        />
      </MapView>
      <View className="rounded-t-3xl -mt-14 bg-white relative">
        <View className="flex-row justify-between px-5 pt-14">
          <View>
            <Text className="text-lg text-amber-700 font-semibold">
              Estimated Arrival Time
            </Text>
            <Text className="text-3xl text-orange-600 font-bold">
              20 - 30 minutes
            </Text>
            <Text className="text-xl text-amber-600 font-light">
              Your Order is on its way
            </Text>
          </View>
          <Image
            className="w-24 h-24 rounded-full"
            source={require("../assets/images/bikeGuy2.gif")}
          />
        </View>
        <View className="flex-row justify-between items-center mx-2 my-4 p-2 rounded-full bg-red-400">
          <View className="p-1 rounded-full bg-white/70">
            <Image
              className="w-16 h-16 rounded-full"
              source={require("../assets/images/deliveryGuy.png")}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="lg font-bold text-white">Luthando Didiza</Text>
            <Text className="lg font-bold text-white">Your Rider</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigate.navigate("Home")}
            className="p-2 mr-5 rounded-full bg-yellow-400"
          >
            <Feather name="home" size={25} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
