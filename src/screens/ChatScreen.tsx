import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Switch,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Clipboard from "expo-clipboard";

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
  const [isEnabled, setIsEnabled] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleSwitch = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ua" : "en"));
    setIsEnabled((prevIsEnabled) => !prevIsEnabled);
  };

  useEffect(() => {
    console.log("Language changed to: ", language);
  }, [language]);

  const ssuElitApi = new SSUElitAPI();

  const handleOnChangeText = (text) => {
    setUserInput(text);
  };

  useEffect(() => {
    // if user sends a message but reply is not yet received -
    // generate a loading animation
    if (userPrompt !== "" && isLoading) {
      setMessages([
        ...messages,
        { role: "bot", content: ElitSSUAssistantStrings.loading_message },
      ]);
      // triger SSU ELIT API only if userPrompt is not empty
      ssuElitApi
        .sendAIRequest({ prompt: userPrompt, language: language })
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

  const handleOnPressButton = () => {
    console.log("User final input", userInput);
    if (!/^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s\p{P}]+$/u.test(userInput)) {
      return;
    }
    setUserPrompt(userInput);
    setIsLoading(true);
    setUserInput("");
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: userInput },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 pb-4 justify-center bg-white">
      <Header
        color={"bg-blue-50"}
        headerText={"elit_icon"}
        navigationPath={"Home"}
        icon={""}
      />
      <ScrollView
        bounces={false}
        className="space-y-6 mx-4 mb-3 mt-3"
        showsVerticalScrollIndicator={false}
      >
        {/* check if messages array is empty and show welcome message */}
        {messages.length === 0 && (
          <View className="pt-40 items-center">
            <TouchableOpacity>
              <LottieView
                style={{
                  height: 120,
                  alignContent: "center",
                  paddingRight: 10,
                  paddingLeft: 10,
                }}
                source={animations.welcome_bot}
                autoPlay
              />
            </TouchableOpacity>
            <Text
              className="mt-3"
              style={{
                color: "#808080",
                fontFamily: "ProductSans-Regular",
                fontSize: 18,
              }}
            >
              {ElitSSUAssistantStrings.chat_bot_greeting}
            </Text>

            <View
              className="mt-2"
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                className="mr-2"
                style={{
                  color: "#808080",
                  fontFamily: "ProductSans-Regular",
                  fontSize: 15,
                }}
              >
                EN
              </Text>
              <Switch
                trackColor={{ false: "#cbd5e1", true: "#dbeafe" }}
                thumbColor={isEnabled ? "#7dd3fc" : "#eff6ff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text
                className="ml-2"
                style={{
                  color: "#808080",
                  fontFamily: "ProductSans-Regular",
                  fontSize: 15,
                }}
              >
                UA
              </Text>
            </View>
          </View>
        )}

        {/* show messages in UI by role: user/bot */}
        {messages.map((message, index) => {
          if (message.role === "user") {
            return (
              <View key={index} className="flex row justify-end pl-8">
                <View
                  style={{
                    backgroundColor: "#F5F5F5",
                    elevation: 5,
                    borderRadius: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                  }}
                  className="rounded-3xl p-4 rounded-tr-none ml-3 mr-3"
                >
                  <Text
                    selectable={true}
                    style={{
                      fontFamily: "ProductSans-Regular",
                      fontSize: 14,
                      lineHeight: wp(5),
                    }}
                  >
                    {message.content}
                  </Text>
                </View>
              </View>
            );
          } else {
            return (
              <View
                key={index}
                className="flex row justify-start pr-14"
                style={{ flexDirection: "row" }}
              >
                <View
                  className="mr-2"
                  style={{
                    width: wp(9),
                    height: hp(4.5),
                  }}
                >
                  <LinearGradient
                    colors={["rgba(0, 255, 0, 0.5)", "rgba(0, 0, 255, 0.5)"]}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 9999,
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontFamily: "ProductSans-Bold",
                        fontSize: 14,
                      }}
                    >
                      ELiT
                    </Text>
                  </LinearGradient>
                </View>
                <View
                  className="rounded-3xl p-4 pr-5 rounded-tl-none bg-blue-200 mt-4 mb-4"
                  style={{
                    elevation: 5,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                  }}
                >
                  <TouchableOpacity
                    //fix onPress to relevant action
                    onPress={() => Clipboard.setStringAsync("mail@mail.com")}
                  >
                    <Text
                      selectable={true}
                      className="pb-2"
                      style={{
                        fontFamily: "ProductSans-Regular",
                        fontSize: 14,
                        lineHeight: wp(5),
                      }}
                    >
                      {message.content ===
                      ElitSSUAssistantStrings.loading_message ? (
                        <LottieView
                          style={{
                            height: 30,
                          }}
                          source={animations.loading}
                          autoPlay
                        />
                      ) : (
                        message.content
                      )}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }
        })}
      </ScrollView>

      <View className="row">
        <AutoGrowingTextInput
          value={userInput}
          placeholder={ElitSSUAssistantStrings.send_message_placeholder}
          onChangeText={handleOnChangeText}
          placeholderTextColor={"grey"}
          multiline={true}
          className="rounded-3xl p-3 left-4 bg-blue-50"
          style={{
            color: "#808080",
            fontFamily: "ProductSans-Regular",
            fontSize: 15,
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
            shadowOpacity: 0.2,
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
