import { View, Text, Image, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import React, { useRef } from "react";

const Card = ({ id, price, title, image, category }) => {
  const animation = useRef(null);

  return (
    <View className="w-[90vw] mx-auto mt-8" key={id}>
      <View className="bg-white shadow-md rounded-lg max-w-sm p-1">
        <View className="p-3">
          <Image
            className="rounded-t-lg w-full h-[30vh]"
            source={{
              uri: image,
            }}
          />
        </View>

        <View className="px-5 pb-5">
          <Text className="text-gray-900 font-semibold text-xl tracking-tight ">
            {title}{" "}
          </Text>
          <View class="flex items-center mt-2.5 mb-5">
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: 50,
                height: 50,
              }}
              source={require("../../assets/rating.json")}
            />
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text className="text-3xl font-bold text-gray-900 ">${price}</Text>
            <TouchableOpacity className="bg-blue-500 p-3  rounded-xl ">
              <Text className="text-white capitalize">{category}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
