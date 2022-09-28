import { View, Text, Image } from "react-native";
import React from "react";

const Banner = () => {
  return (
    <View className="relative flex justify-center items-center">
      <Image
        source={{
          uri: "https://source.unsplash.com/random/?bag",
        }}
        className="w-full h-[20vh]"
      />
      <Text className="absolute top-[50%] text-white  text-2xl ">
        SUMMER SALES
      </Text>
    </View>
  );
};

export default Banner;
