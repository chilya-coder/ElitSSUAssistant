import { View, Text, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Option from "./Option";
import ElitSSUAssistantString from "../ElitSSUAssistantStrings.json";
import icons from "../../constants/icons";

export default function ListOptions() {
  return (
    <View style={{ height: hp(130) }}>
      <Text
        className="text-center mb-5 pb-3"
        style={{
          color: "#808080",
          fontFamily: "ProductSans-Bold",
          fontSize: 40,
        }}
      >
        <Image
          source={icons.elit_logo}
          style={{
            width: wp(40),
            height: hp(40),
            resizeMode: "contain",
            marginRight: 10,
          }}
        ></Image>
        {ElitSSUAssistantString.elit_assistant_options_title}
      </Text>

      <Option
        title={ElitSSUAssistantString.ai_chat_option_title}
        description={ElitSSUAssistantString.ai_chat_option_description}
        color={"bg-blue-50"}
        option={"Chat"}
      />

      <Option
        title={ElitSSUAssistantString.elit_events_option_title}
        description={ElitSSUAssistantString.elit_events_option_description}
        color={"bg-blue-50"}
        option={"Events"}
      />

      <Option
        title={ElitSSUAssistantString.elit_contacts_option_title}
        description={ElitSSUAssistantString.elit_contacts_option_description}
        color={"bg-blue-50"}
        option={"Events"}
      />
      <Text
        className="text-center"
        style={{
          marginTop: wp(27),
          color: "#808080",
          fontFamily: "ProductSans-Regular",
          fontSize: 17,
        }}
      >
        (c) 2023 by Yu Chi
      </Text>
    </View>
  );
}
