import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ListOptions from "../components/ListOptions";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white p-6">
      <SafeAreaView className="flex-1 justify-center">
        <ListOptions />
      </SafeAreaView>
    </View>
  );
}
