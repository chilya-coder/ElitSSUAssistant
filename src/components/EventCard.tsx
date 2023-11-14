import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
let { width, height } = Dimensions.get("window");

function handleClick() {
  console.log("Card is pressed");
}
export const EventCard = ({ item }) => {
  let source =
    item === "Title1"
      ? require("../../assets/images/halloween.jpeg")
      : item === "Title2"
      ? require("../../assets/images/student_day.jpeg")
      : item === "Title3"
      ? require("../../assets/images/week_of_anime.jpeg")
      : require("../../assets/images/mafia.jpeg");
  const navigation = useNavigation();
  return (
    // <View className="bg-white">
    <TouchableWithoutFeedback
      className="bg-blue-500"
      onPress={() => navigation.navigate("EventDetails")}
    >
      <Image
        source={source}
        style={{ width: width * 0.8, height: height * 0.4 }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
    // </View>
  );
};
