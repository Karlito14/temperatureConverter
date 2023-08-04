import { Text, TextInput, View } from 'react-native';
import { style } from './InputTemperature.style';

export const InputTemperature = ({ defaultValue, onChangeText }) => {
    
    return (
        <View style={style.container}>
            <TextInput 
                style={style.input} 
                placeholder='Tape une température' 
                keyboardType='numeric'
                maxLength={4}
                onChangeText={onChangeText}
            />
            <Text style={style.unit}>°C</Text>
        </View>
        
    )
};