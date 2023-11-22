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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: height * -0.045 }}
        >
          <View>
            <Image
              source={require("../../assets/images/student_day.jpeg")}
              style={{
                width: width,
                height: height * 0.55,
              }}
            />
            <LinearGradient
              colors={["transparent", "rgba(8,47,73, 1)", "rgba(8,47,73, 1)"]}
              style={{ width, height: height * 0.4 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0"
            />
          </View>
          <View style={{ marginTop: -(height * 0.2) }} className="space-y-3">
            <Text
              className="text-center tracking-wider"
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
              className="text-center tracking-wider pt-4 pb-4"
              style={{
                fontFamily: "ProductSans-Regular",
                fontSize: 19,
                color: "white",
              }}
            >
              📍Marinad 📆 16.11 🕐 17:00
            </Text>
            <Text
              className="text-neutral-400 mx-4 trackin-wide"
              style={{
                fontFamily: "ProductSans-Regular",
                fontSize: 17,
                color: "white",
              }}
            >
              Змучився за два місяці навчання? Набридла сірість осені?😓
              Студентство - це не лише час іспитів і заліків, а й найяскравіших
              розваг💫 Вже давно відомо, що читабельний зміст буде заважати
              зосередитись людині, яка оцінює композицію сторінки. Сенс
              використання Lorem Ipsum полягає в тому, що цей текст має
              більш-менш нормальне розподілення літер на відміну від, наприклад,
              Це робить текст схожим на оповідний. Багато програм верстування та
              веб-дизайну використовують Lorem Ipsum як зразок і пошук за
              терміном "lorem ipsum" відкриє багато веб-сайтів, які знаходяться
              ще в зародковому стані. Різні версії Lorem Ipsum з'явились за
              минулі роки, деякі випадково, деякі було створено зумисно
              (зокрема, жартівливі).
            </Text>
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
              className={"rounded-3xl"}
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
                backgroundColor: "#71b126",
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
