import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

interface OptionProps {
  title: string;
  description: string;
  color: string;
  option: "Chat" | "Maps" | "Events";
}

// TODO:
// double check about shadow, e.g. shadow-xl w-full shadow-black/50
// check problem with navigation { name: option }

export default function Option({
  title,
  description,
  color,
  option,
}: OptionProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate({ name: option })}>
      <View className={color + " p-4 rounded-xl space-y-2 mt-5"}>
        <View className="flex-row items-center">
          <Text style={{ fontSize: wp(4.8) }} className="font-semibold ">
            {title}
          </Text>
        </View>
        <Text
          style={{ fontSize: wp(3.8) }}
          className="text gray-700 font-medium"
        >
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
