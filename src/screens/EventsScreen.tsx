import { SafeAreaView, View, Text, Image } from "react-native";
import React, { useState } from "react";
import ListEvents from "../components/ListEvents";
import { Header } from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import SocialMediaTab from "../components/SocialMediaTab";

export default function EventsScreen() {
  const [events, setEvent] = useState(["Title1", "Title2", "Title3", "Title4"]);
  return (
    <SafeAreaView className="flex-1 justify-center">
      <LinearGradient
        colors={["rgba(0, 200, 0, 0.4)", "rgba(0, 100, 250, 0.8)"]}
        style={{ flex: 1 }}
      >
        <Header color="" headerText={"controller"} />
        <View className="mt-7">
          <ListEvents data={events}></ListEvents>
        </View>
        <View className="my-10">
          <SocialMediaTab />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
