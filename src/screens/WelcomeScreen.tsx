import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import ElitSSUAssistantStrings from "../ElitSSUAssistantStrings.json";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="spacy-y-2">
        <FontAwesomeIcon icon={faMugHot} />
        <Text
          style={{ fontSize: wp(8) }}
          className="text-center font-bold text-grey-700"
        >
          {ElitSSUAssistantStrings.welcome_title}
        </Text>
        <Text
          style={{ fontSize: wp(4) }}
          className="text-center text-gray-700 font-semibold"
        >
          {ElitSSUAssistantStrings.welcome_message}
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          style={{ width: wp(60), height: hp(10) }}
          source={require("../../assets/images/logo.png")}
        ></Image>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        className="bg-blue-400 mx-5 p-4 rounded-2xl"
      >
        <Text
          style={{ fontSize: wp(6) }}
          className="text-center font-bold text-white"
        >
          {ElitSSUAssistantStrings.welcome_button_message}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
