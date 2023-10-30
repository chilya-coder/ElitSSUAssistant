import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { dummyMessages } from "./dummyMessages";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import { SSUElitAPI } from "../services/api/SSUElitApi";

export default function ChatScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [userMessage, setUserMessage] = useState("");
  const [userPrompt, setUserPrompt] = useState("");

  const api = new SSUElitAPI();
  function handleOnChangeText(text: string) {
    setUserMessage(text);
  }

  useEffect(() => {
    if (userPrompt !== "") {
      api.sendAIRequest({ prompt: userPrompt }).then((datatest) => {
        console.log("API response: ", datatest);
        setMessages([...messages, { role: "bot", content: datatest.body }]);
        setUserPrompt("");
      });
    }
  }, [userPrompt]);

  function handleOnPressButton() {
    console.log("Button pressed!");
    setUserMessage("");
    setUserPrompt(userMessage);
    setMessages([...messages, { role: "user", content: userMessage }]);
  }

  return (
    <SafeAreaView className="flex-1 py-10 justify-center bg-white">
      <View className="flex-row mx-5 mt-14 mb-5 justify-center">
        <ScrollView
          bounces={false}
          className="space-y-5"
          showsVerticalScrollIndicator={false}
        >
          {messages.map((message, index) => {
            if (message.role === "bot") {
              return (
                <View key={index} className="flex row justify-start pr-8">
                  <View
                    style={{
                      backgroundColor: "#cffafe",
                      borderRadius: 10,
                      padding: 10,
                    }}
                    className="rounded-3xl p-4 rounded-tl-none"
                  >
                    <Text>{message.content}</Text>
                  </View>
                </View>
              );
            } else {
              return (
                <View key={index} className="flex row justify-end pl-8">
                  <View
                    style={{
                      backgroundColor: "#F5F5F5",
                      borderRadius: 10,
                      padding: 10,
                    }}
                    className="bg-white rounded-3xl p-4 rounded-tr-none"
                  >
                    <Text>{message.content}</Text>
                  </View>
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
      <View className="flex-row justify-center items-center mb-3.5">
        <View className="pr-14">
          <AutoGrowingTextInput
            value={userMessage}
            onChangeText={handleOnChangeText}
            multiline={true}
            className="rounded-3xl p-4"
            style={{
              backgroundColor: "#F5F5F5",
              width: wp(80),
              height: hp(7.5),
            }}
          ></AutoGrowingTextInput>
        </View>
        <TouchableOpacity
          className={"bg-cyan-50 rounded-3xl p-3 absolute right-3"}
          style={{ width: wp(12), height: hp(6) }}
          onPress={handleOnPressButton}
        >
          <Image
            source={require("../../assets/images/sendicon.png")}
            style={{ height: hp(3), width: hp(3) }}
          ></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
