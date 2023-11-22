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

import LottieView from "lottie-react-native";
import ElitSSUAssistantStrings from "../ElitSSUAssistantStrings.json";
import icons from "../../constants/icons";
import animations from "../../constants/animations";
import { Header } from "../components/Header";
import { SSUElitAPI } from "../services/api/SSUElitAPI";

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const api = new SSUElitAPI();

  function handleOnChangeText(text: string) {
    setUserInput(text);
  }

  useEffect(() => {
    // if user sends a message but reply is not yet received -
    // generate a loading animation
    if (userPrompt !== "" && isLoading) {
      setMessages([
        ...messages,
        { role: "bot", content: ElitSSUAssistantStrings.loading_message },
      ]);
      // triger SSU ELIT API only if userPrompt is not empty
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
    console.log("User final input", userInput);
    if (!/^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s\p{P}]+$/u.test(userInput)) {
      return;
    }
    setUserPrompt(userInput);
    setIsLoading(true);
    setUserInput("");
    setMessages([...messages, { role: "user", content: userInput }]);
  }

  return (
    <SafeAreaView className="flex-1 pb-4 mt-0 justify-center bg-white">
      <Header
        color={"bg-blue-50"}
        headerText={ElitSSUAssistantStrings.elit_ai_bot}
      />
      <ScrollView
        bounces={false}
        className="space-y-5 mx-5 mt-3 mb-3"
        showsVerticalScrollIndicator={false}
      >
        {/* check if messages array is empty and show welcome message */}
        {messages.length === 0 && (
          <View className="pt-40 items-center">
            <LottieView
              style={{
                height: 120,
                alignContent: "center",
              }}
              source={animations.welcome_bot}
              autoPlay
            />
            <Text
              className="mt-3"
              style={{
                fontFamily: "ProductSans-Black",
                fontSize: 16,
                fontWeight: "bold",
                color: "grey",
              }}
            >
              {ElitSSUAssistantStrings.chat_bot_greeting}
            </Text>
          </View>
        )}

        {/* show messages in UI by role: user/bot */}
        {messages.map((message, index) => {
          if (message.role === "user") {
            return (
              <View key={index} className="flex row justify-end pl-8 pr-1">
                <View
                  style={{
                    backgroundColor: "#F5F5F5",
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
                          source={animations.loading}
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

      {/* input field and send button */}
      <View className="row">
        <AutoGrowingTextInput
          value={userInput}
          placeholder={ElitSSUAssistantStrings.send_message_placeholder}
          onChangeText={handleOnChangeText}
          placeholderTextColor={"grey"}
          multiline={true}
          className="rounded-3xl p-3 left-4 bg-blue-50"
          style={{
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
            width: wp(13),
            height: hp(6.5),
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
          <View className="flex justify-center items-center">
            <Image
              className="mx-1 my-1"
              source={icons.push}
              style={{
                height: hp(3),
                width: hp(3),
              }}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
