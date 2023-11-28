import { TouchableOpacity, Image, Linking } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import icons from "../../constants/icons";

interface SocialMediaIconProps {
  color?: string;
  icon: string;
  height: number;
  width: number;
  url: string;
}

const onPress = (url: string) =>
  Linking.canOpenURL(url).then(() => {
    Linking.openURL(url);
  });

export const SocialMediaIcon = ({
  icon,
  height,
  width,
  url,
}: SocialMediaIconProps) => {
  const selectedIcon = icons[icon]; // Access the correct icon from the icons object
  return (
    <TouchableOpacity onPress={() => onPress(url)}>
      <Image
        source={selectedIcon}
        style={{
          height: hp(height),
          width: hp(width),
        }}
      ></Image>
    </TouchableOpacity>
  );
};
