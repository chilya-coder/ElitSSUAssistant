import { View } from "react-native";
import React from "react";
import { SocialMediaIcon } from "./SocialMediaIcon";
import urls from "../../constants/urls";

export default function SocialMediaTab() {
  return (
    <View className="justify-center mx-16 rounded-2xl bg-blue-400">
      <View className="flex-row mx-auto justify-center">
        <View className="mx-7">
          <SocialMediaIcon
            icon={"insta_logo"}
            height={7}
            width={6}
            url={urls.elit_insta_url}
          />
        </View>
        <View className="mr-7 mt-0.5">
          <SocialMediaIcon
            icon={"university_logo"}
            height={6.5}
            width={6}
            url={urls.elit_ssu_ru_url}
          />
        </View>
        <View className="mr-7 mt-1">
          <SocialMediaIcon
            icon={"telegram_logo"}
            height={6}
            width={6}
            url={urls.elit_telegram_url}
          />
        </View>
      </View>
    </View>
  );
}
