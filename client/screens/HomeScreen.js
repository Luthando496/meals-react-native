import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Categories from "../components/Categories";
import { featured } from "../data";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white pb-20">
      <StatusBar style="dark" />
      {/* search bar */}
      <View className="flex-row items-center mx-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border-gray-400 border">
          <Feather name="search" size={27} color="gray" />
          <TextInput
            placeholder="Search Restaurant Meal"
            className="ml-3 flex-1 text-gray-500"
          />
          <View className="flex-row items-center space-x-2 border-0 border-l-2 pl-2 border-gray-500">
            <Feather name="map-pin" size={18} color="pink" />
            <Text className="text-pink-400 text-sm">Cape Town</Text>
          </View>
        </View>
        <View className="p-3 bg-teal-300 ml-1 rounded-full">
          <Feather name="sliders" size={27} color="white" />
        </View>
      </View>
      {/* search bar end */}

      {/* main categories */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* categories*/}

        <Categories />
        {/* categories end */}
        
        {/* featured */}
        <View className="mt-5">
            {
                [featured,featured,featured].map((feat,index)=>{
                    const {title,restaurants,description,id} = feat;

                    return(
                        <FeaturedRow  key={index} title={title} restaurants={restaurants} description={description} />
                    )
                })
            }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
