import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import { SSUElitAPI } from "../services/api/SSUElitApi";
import LottieView from "lottie-react-native";
import ElitSSUAssistantStrings from "../ElitSSUAssistantStrings.json";

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const api = new SSUElitAPI();

  function handleOnChangeText(text: string) {
    setUserMessage(text);
  }

  useEffect(() => {
    if (userPrompt !== "" && isLoading) {
      setMessages([
        ...messages,
        { role: "bot", content: ElitSSUAssistantStrings.loading_message },
      ]);
      api
        .sendAIRequest({ prompt: userPrompt })
        .then((datatest) => {
          setIsLoading(false);
          setMessages([...messages, { role: "bot", content: datatest.body }]);
          console.log("AI API response: ", datatest.body);
          setUserPrompt("");
        })
        .catch((error) => {
          setMessages([
            ...messages,
            {
              role: "bot",
              content: ElitSSUAssistantStrings.internal_server_error,
            },
          ]);
          setIsLoading(false);
        });
    }
  }, [userPrompt]);

  function handleOnPressButton() {
    console.log("User input", userMessage);
    if (!/^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s\p{P}]+$/u.test(userMessage)) {
      return;
    }
    setUserPrompt(userMessage);
    setIsLoading(true);
    setUserMessage("");
    setMessages([...messages, { role: "user", content: userMessage }]);
  }
  console.log("Check it", messages);
  return (
    <SafeAreaView className="flex-1 pb-4 justify-center bg-white">
      <View
        style={{
          backgroundColor: "#F5F5F5",
          padding: 25,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className="mt-5"
        >
          <TouchableOpacity>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", textAlign: "left" }}
            >
              Hello
            </Text>
          </TouchableOpacity>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", textAlign: "right" }}
          >
            ELIT Bot
          </Text>
        </View>
      </View>

      {
        <ScrollView
          bounces={false}
          className="space-y-5 mx-5 mt-3 mb-3"
          showsVerticalScrollIndicator={false}
          // style={{ backgroundColor: "#7FFFD4" }}
        >
          {messages.length === 0 && (
            <View className="pt-40 pl-5" style={{ alignItems: "center" }}>
              <LottieView
                style={{
                  height: 150,
                  alignContent: "center",
                }}
                source={require("../../assets/images/lottie/welcome_bot.json")}
                autoPlay
              />
              <Text
                className="mt-3"
                style={{ fontSize: 16, fontWeight: "bold" }}
              >
                Hi! Ask me anything about ELIT.
              </Text>
            </View>
          )}
          {messages.map((message, index) => {
            if (message.role === "user") {
              return (
                <View key={index} className="flex row justify-end pl-8 pr-1">
                  <View
                    style={{
                      backgroundColor: "#F5F5F5",
                      borderRadius: 10,
                      padding: 10,
                      // shadowColor: "#000",
                      // shadowOffset: {
                      //   width: 1,
                      //   height: 1,
                      // },
                      // shadowOpacity: 0.22,
                      // shadowRadius: 2.22,
                      // elevation: 3,
                    }}
                    className="rounded-3xl p-4 rounded-tr-none"
                  >
                    <Text>{message.content}</Text>
                  </View>
                </View>
              );
            } else {
              return (
                <View key={index} className="flex row justify-start pr-8 pl-1">
                  <View
                    style={{
                      backgroundColor: "#bfdbfe",
                      borderRadius: 10,
                      padding: 10,
                    }}
                    className="rounded-3xl p-2 rounded-tl-none"
                  >
                    <Text>
                      <Text>
                        {message.content ===
                        ElitSSUAssistantStrings.loading_message ? (
                          <LottieView
                            style={{
                              height: 45,
                            }}
                            source={require("../../assets/images/lottie/loading.json")}
                            autoPlay
                          />
                        ) : (
                          message.content
                        )}
                      </Text>
                    </Text>
                  </View>
                </View>
              );
            }
          })}
        </ScrollView>
      }
      <View>
        <AutoGrowingTextInput
          value={userMessage}
          placeholder={ElitSSUAssistantStrings.send_message_placeholder}
          onChangeText={handleOnChangeText}
          placeholderTextColor={"grey"}
          multiline={true}
          className="rounded-3xl p-3 left-4 bg-blue-50"
          style={{
            // backgroundColor: "#F5F5F5",
            width: wp(75),
            height: hp(7.5),
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
          }}
        ></AutoGrowingTextInput>
        <TouchableOpacity
          className={"rounded-3xl p-3 absolute right-4 bg-blue-50"}
          style={{
            //backgroundColor: "#F5F5F5",
            width: wp(14),
            height: hp(7),
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.4,
            shadowRadius: 1.41,
            elevation: 2,
          }}
          onPress={handleOnPressButton}
        >
          <Image
            className="mx-1 my-1"
            source={require("../../assets/images/sendicon.png")}
            style={{
              height: hp(3),
              width: hp(3),
            }}
          ></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
