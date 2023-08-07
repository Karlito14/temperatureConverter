import { View, Text, ImageBackground } from "react-native";
import { style } from "./App.style";
import hotBackground from './assets/hot.png';
import coldbackground from './assets/cold.png';
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { DEFAULT_TEMPERATURE, UNITS, DEFAULT_UNIT } from "./constant";
import { useState } from "react";
import { getOpposite, convertTemperature } from "./services/temperature-service";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);

  return (
    <ImageBackground source={hotBackground} style={style.container}>
      <View style={style.workspace}>
        <TemperatureDisplay value={convertTemperature(currentUnit, inputValue)} unit={getOpposite(currentUnit)} />
        <InputTemperature defaultValue={DEFAULT_TEMPERATURE} onChangeText={setInputValue} currentUnit={currentUnit} />
        <View><Text>Button</Text></View>
      </View>
    </ImageBackground>
  );
}
