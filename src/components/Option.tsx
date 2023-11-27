import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

interface OptionProps {
  title: string;
  description: string;
  color: string;
  option: "Chat" | "Maps" | "Events";
}

export default function Option({
  title,
  description,
  color,
  option,
}: OptionProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate({ name: option } as never)}
    >
      <View
        className={color + " px-5 py-5 rounded-3xl space-y-5 mt-5"}
        style={{ borderWidth: 0.5, borderColor: "#38bdf8" }}
      >
        <View className="flex-row items-center">
          <Text
            style={{
              color: "#4b5563",
              fontSize: wp(5.5),
              fontFamily: "ProductSans-Bold",
            }}
            className="font-semibold"
          >
            {title}
          </Text>
        </View>
        <Text
          style={{
            fontSize: wp(4.5),
            color: "#808080",
            fontFamily: "ProductSans-Regular",
          }}
          className="text gray-700 font-medium pr-4"
        >
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
