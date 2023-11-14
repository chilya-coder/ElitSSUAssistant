import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
interface HeaderProps {
  color: string;
}
export function Header({ color }: HeaderProps) {
  const navigation = useNavigation();
  return (
    <View
      className={color}
      style={{
        padding: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        className="mt-5"
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            className="mx-1 my-1"
            source={require("../../assets/icons/back-icon.png")}
            style={{
              height: hp(3),
              width: hp(3),
            }}
          ></Image>
        </TouchableOpacity>
        <Text
          className="pt-1"
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "right",
            color: "grey",
          }}
        >
          ELIT Events
        </Text>
      </View>
    </View>
  );
}
