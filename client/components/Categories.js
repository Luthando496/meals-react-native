import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { categories } from "../data";

const Categories = () => {
  const [active, setActive] = useState(null);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible"
      >
        {categories.map((category, index) => {
          const { name, image, id } = category;
          let isActive = active === id ? "bg-orange-600" : "bg-gray-400";
          let isText = active === id ? "text-yellow-500" : "text-orange-600";

          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActive(id)}
                className={`p-4 rounded-full shadow-2xl ${isActive} `}
              >
                <Image style={{ width: 30, height: 30 }} source={image} className='self-center' />
              </TouchableOpacity>
                <Text className={`${isText} uppercase`}>{name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
