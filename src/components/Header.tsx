import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
interface HeaderProps {
  color: string;
  headerText: string;
  navigationPath: string;
  icon: string;
}
export function Header({
  color,
  headerText,
  navigationPath = "Home",
  icon = "",
}: HeaderProps) {
  const navigation = useNavigation();
  return (
    <View
      className={color}
      style={{
        paddingTop: hp(2),
        paddingBottom: hp(2),
        paddingLeft: wp(5),
        paddingRight: wp(5),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate(navigationPath)}>
          <Image
            className="mx-1 my-1"
            source={require("../../assets/icons/back-icon.png")}
            style={{
              height: hp(3),
              width: hp(3),
            }}
          ></Image>
        </TouchableOpacity>
        {icon && (
          <Image
            style={{
              height: hp(5),
              width: hp(5),
            }}
            source={icon}
          />
        )}
        <Text
          className="pt-1"
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "right",
            color: "grey",
          }}
        >
          {headerText}
        </Text>
      </View>
    </View>
  );
}
