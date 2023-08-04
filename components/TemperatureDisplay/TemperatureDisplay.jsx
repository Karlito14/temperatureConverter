import { Text } from 'react-native';
import { style } from './TemperatureDisplay.style';

export const TemperatureDisplay = ({ value, unit }) => {
    return (
        <Text style={style.text}>{value} {unit}</Text>
    )
}