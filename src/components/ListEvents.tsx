import { View, Text, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { EventCard } from "./EventCard";
import ElitSSUAssistantStrings from "../ElitSSUAssistantStrings.json";
let { width } = Dimensions.get("window");

export default function ListEvents({ data }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getCurrentDate = () => {
    const d = new Date();
    //format dd mm, yy
    return (
      d.getDate() + " " + monthNames[d.getMonth()] + ", " + d.getFullYear()
    );
  };
  return (
    <View className="space-y-3">
      <Text
        className="mx-8 text-white mb-2"
        style={{
          fontFamily: "ProductSans-Regular",
          fontSize: 22,
        }}
      >
        {getCurrentDate()}
      </Text>
      <Text
        className="text-white mx-8 mb-5"
        style={{
          fontFamily: "ProductSans-Bold",
          fontSize: 33,
          letterSpacing: -1,
          textShadowColor: "rgba(0, 0, 0, 0.25)",
          textShadowOffset: { width: 0, height: 2 },
          textShadowRadius: 4,
        }}
      >
        {ElitSSUAssistantStrings.events_adv}
      </Text>
      <View className="mb-5">
        <Carousel
          data={data}
          renderItem={({ item }) => <EventCard item={item} />}
          firstItem={2}
          inactiveSlideOpacity={0.6}
          sliderWidth={width}
          itemWidth={width * 0.79}
          slideStyle={{ display: "flex", alignItems: "center" }}
        ></Carousel>
      </View>
      <Text
        className="px-8 text-white"
        style={{
          fontFamily: "ProductSans-Regular",
          fontSize: 20,
          lineHeight: 30,
        }}
      >
        {ElitSSUAssistantStrings.social_media_adv}
      </Text>
    </View>
  );
}
