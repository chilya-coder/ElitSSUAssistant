import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";

let { width, height } = Dimensions.get("window");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function EventDetailsScreen() {
  return (
    <>
      <SafeAreaView className="flex-1 justify-center bg-sky-950">
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1 ">
          <View>
            <View style={{ position: "relative" }}>
              <Image
                source={require("../../assets/images/week_of_anime.jpeg")}
                style={{
                  width: width,
                  height: height * 0.55,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <Header color="" headerText={""} navigationPath={"Events"} />
              </View>
            </View>
            <LinearGradient
              colors={["transparent", "rgba(8,47,73, 1)", "rgba(8,47,73, 1)"]}
              style={{ width, height: height * 0.4 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0"
            />
          </View>
          <View
            style={{ marginTop: -(height * 0.2) }}
            className="space-y-3 px-5"
          >
            <Text
              className="text-center"
              style={{
                textShadowColor: "rgba(0, 0, 0, 0.25)",
                textShadowOffset: { width: 0, height: 4 },
                textShadowRadius: 4,
                fontFamily: "ProductSans-Bold",
                fontSize: 33,
                color: "white",
              }}
            >
              ЧАС СВЯТКУВАТИ СТУДЕНТСТВО!
            </Text>
            <Text
              className="text-center tracking-wider pb-4"
              style={{
                fontFamily: "ProductSans-Regular",
                fontSize: 23,
                color: "white",
              }}
            >
              📍Marinad 📆 16.11 🕐 17:00
            </Text>
            <View className="bg-sky-900 px-3 py-8 rounded-2xl space-y-6">
              <Text
                className="mx-4"
                style={{
                  fontFamily: "ProductSans-Bold",
                  fontSize: 18,
                  color: "white",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          className="py-3"
          style={{
            backgroundColor: "rgba(8,47,73, 1)",
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              className={"rounded-3xl bg-blue-300"}
              style={{
                width: wp(50),
                height: hp(7),
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 5,
                justifyContent: "center",
                // backgroundColor: "#71b126",
              }}
              onPress={() => console.log("Pressed")}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "ProductSans-Bold",
                  fontSize: 18,
                }}
              >
                Приєднатися
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
