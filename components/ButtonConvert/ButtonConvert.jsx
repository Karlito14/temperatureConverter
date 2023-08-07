import { Text, TouchableOpacity } from 'react-native';
import { style } from './ButtonConvert.style';

export const ButtonConvert = ({unit, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={style.button}>
            <Text style={style.text}>Convertir en {unit}</Text>
        </TouchableOpacity>
    )
};