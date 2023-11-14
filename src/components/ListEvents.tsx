import { View, Text, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { EventCard } from "./EventCard";
let { width, height } = Dimensions.get("window");

export default function ListEvents({ data }) {
  return (
    // <View className="bg-cyan-500 mt-5 pb-10 pt-5">
    <View className="mt-5 pb-10 pt-5">
      <Text
        className="text-white mx-4 mb-5"
        style={{
          fontFamily: "ProductSans-Bold",
          fontSize: 30,
          letterSpacing: -1,
        }}
      >
        Explore ELIT events
      </Text>
      <View className="mt-10">
        <Carousel
          data={data}
          renderItem={({ item }) => <EventCard item={item} />}
          firstItem={1}
          inactiveSlideOpacity={0.6}
          sliderWidth={width}
          itemWidth={width * 0.8}
          slideStyle={{ display: "flex", alignItems: "center" }}
        ></Carousel>
      </View>
    </View>
  );
}
