import { View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const Loader = () => {
  const animation = useRef(null);

  return (
    <View className=" justify-center items-center">
      <LottieView
        autoPlay
        ref={animation}
        className="w-[50vw] h-[30vh] mt-28"
        source={require("../../assets/loader.json")}
      />
    </View>
  );
};

export default Loader;
