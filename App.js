import { View, Text, ImageBackground } from "react-native";
import { style } from "./App.style";
import hotBackground from './assets/hot.png';
import coldbackground from './assets/cold.png';
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { DEFAULT_TEMPERATURE, UNITS, DEFAULT_UNIT } from "./constant";
import { useEffect, useState } from "react";
import { getOpposite, convertTemperature, isIceTemperature } from "./services/temperature-service";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBackground, setCurrentBackground] = useState();
  const oppositeUnit = getOpposite(currentUnit);

  useEffect(() => {
    const temperature = Number.parseFloat(inputValue);
    if(!isNaN(temperature)) {
      const isCold = isIceTemperature(temperature, currentUnit);
      setCurrentBackground(isCold ? coldbackground : hotBackground)
    }
  }, [inputValue, currentUnit])


  return (
    <ImageBackground source={currentBackground} style={style.container}>
      <View style={style.workspace}>
        <TemperatureDisplay value={convertTemperature(currentUnit, inputValue)} unit={oppositeUnit} />
        <InputTemperature defaultValue={DEFAULT_TEMPERATURE} onChangeText={setInputValue} currentUnit={currentUnit} />
        <ButtonConvert onPress={() => {setCurrentUnit(oppositeUnit)}} unit={currentUnit} />
      </View>
    </ImageBackground>
  );
}
