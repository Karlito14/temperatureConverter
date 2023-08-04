import { View, Text, ImageBackground } from "react-native";
import { style } from "./App.style";
import hotBackground from './assets/hot.png';
import coldbackground from './assets/cold.png';
import { InputTemperature } from "./components/InputTemperature/InputTemperature";

export default function App() {
  return (
    <ImageBackground source={hotBackground} style={style.container}>
      <View style={style.workspace}>
        <View><Text>Température</Text></View>
        <InputTemperature defaultValue={'20'} />
        <View><Text>Button</Text></View>
      </View>
    </ImageBackground>
  );
}
