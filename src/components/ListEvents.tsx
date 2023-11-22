import { View, Text, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { EventCard } from "./EventCard";
let { width, height } = Dimensions.get("window");

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
    <View className="mt-10 ">
      <Text
        className="mx-4 text-white mb-2"
        style={{
          fontFamily: "ProductSans-Regular",
          fontSize: 18,
        }}
      >
        {getCurrentDate()}
      </Text>
      <Text
        className="text-white mx-4 pb-5"
        style={{
          fontFamily: "ProductSans-Bold",
          fontSize: 33,
          letterSpacing: -1,
          textShadowColor: "rgba(0, 0, 0, 0.25)",
          textShadowOffset: { width: 0, height: 2 },
          textShadowRadius: 4,
        }}
      >
        Explore ELIT events
      </Text>
      <View className="mb-5 mt-5">
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
      <Text
        className="px-4 mt-5 text-white "
        style={{
          fontFamily: "ProductSans-Regular",
          fontSize: 18,
        }}
      >
        Follow us on social media and share your experience!
      </Text>
    </View>
  );
}
