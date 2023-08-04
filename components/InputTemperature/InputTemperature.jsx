import { Text, TextInput, View } from 'react-native';
import { style } from './InputTemperature.style';

export const InputTemperature = ({ defaultValue }) => {
    return (
        <View style={style.container}>
            <TextInput 
                style={style.input} 
                placeholder='Tape une température' 
                keyboardType='numeric'
                maxLength={4}
                value={defaultValue}
            />
            <Text style={style.unit}>°C</Text>
        </View>
        
    )
};