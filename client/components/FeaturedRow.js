import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, id, restaurants }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between px-4">
        <View>
          <Text className="text-xl font-bold">{title}</Text>
          <Text className="text-xs text-red-400">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-lg font-bold text-yellow-500">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible"
      >
        {restaurants.map((restaurant, index) => {

            return(
                <RestaurantCard item={restaurant} key={index} />
            )
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
