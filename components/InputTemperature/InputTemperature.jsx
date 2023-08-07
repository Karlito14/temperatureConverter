import { Text, TextInput, View } from 'react-native';
import { style } from './InputTemperature.style';

export const InputTemperature = ({ defaultValue, onChangeText, currentUnit }) => {
    
    return (
        <View style={style.container}>
            <TextInput 
                style={style.input} 
                placeholder='Tape une température' 
                keyboardType='numeric'
                maxLength={4}
                onChangeText={onChangeText}
                defaultValue={defaultValue}
            />
            <Text style={style.unit}>{currentUnit}</Text>
        </View>
        
    )
};