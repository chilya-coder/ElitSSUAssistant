import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Option from "./Option";
import ElitSSUAssistantString from "../ElitSSUAssistantStrings.json";

export default function ListOptions() {
  return (
    <View style={{ height: hp(60) }} className="space-y-4">
      <Text
        style={{ fontSize: wp(6.5) }}
        className="font-semibold text-grey-700"
      >
        {ElitSSUAssistantString.elit_assistant_options_title}
      </Text>

      <Option
        title={ElitSSUAssistantString.ai_chat_option_title}
        description={ElitSSUAssistantString.ai_chat_option_description}
        color={"bg-cyan-100"}
        option={"Chat"}
      />

      <Option
        title={ElitSSUAssistantString.elit_maps_option_title}
        description={ElitSSUAssistantString.elit_maps_option_description}
        color={"bg-green-100"}
        option={"Maps"}
      />

      <Option
        title={ElitSSUAssistantString.elit_events_option_title}
        description={ElitSSUAssistantString.elit_events_option_description}
        color={"bg-red-100"}
        option={"Events"}
      />
    </View>
  );
}
