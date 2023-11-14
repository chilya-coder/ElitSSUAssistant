import { SafeAreaView, Text } from "react-native";
import AppNavigation from "./src/navigation";
import { useFonts } from "expo-font";
import { customFonts } from "./constants/fonts";

export default function App() {
  useFonts(customFonts);
  return <AppNavigation />;
}
