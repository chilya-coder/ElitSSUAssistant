import { SafeAreaView, ScrollView, View } from "react-native";
import React, { useState } from "react";
import ListEvents from "../components/ListEvents";
import { Header } from "../components/Header";

export default function EventsScreen() {
  const [events, setEvent] = useState(["Title1", "Title2", "Title3", "Title4"]);
  return (
    <SafeAreaView className="flex-1 justify-center bg-sky-200">
      <Header color="bg-blue-50" headerText={"ELIT Events"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListEvents data={events}></ListEvents>
      </ScrollView>
    </SafeAreaView>
  );
}
