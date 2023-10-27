import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ListOptions from "../components/ListOptions";

export default function HomeScreen() {
  return (
    <View className="flex-1  bg-white p-1 ">
      <SafeAreaView className="flex-1 flex mx-5 mt-5 justify-center">
        <View className="flex-row justify-center"></View>
        <ListOptions />
      </SafeAreaView>
    </View>
  );
}
