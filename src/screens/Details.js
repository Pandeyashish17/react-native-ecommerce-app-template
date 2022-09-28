import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const Details = ({ navigation, route }) => {
  const { title, price, description, category, image } = route.params;
  return (
    <>
      <ScrollView
        className="  pt-4 bg-slate-50"
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{
            uri: image,
          }}
          className="w-full h-[30vh] rounded-md"
        />
        <View className="mt-7   p-4 rounded-md">
          <Text className="font-bold text-2xl">{title}</Text>
          <Text className="mt-4 font-medium text-xl">{description}</Text>
          <Text className="font-bold text-3xl text-blue-700 mt-4 bg-blue-400 p-1 w-[50vw] rounded-xl pl-2 mb-3">
            Price: ${price}
          </Text>
          <Text className="font-medium text-lg capitalize ">
            see more of this category :{" "}
            <Text className="text-blue-500   p-4 ">{category}</Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Details;
