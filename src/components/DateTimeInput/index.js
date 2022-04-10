import React from 'react'
import { View } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import { styles } from './styles'

export default function DateTimeInput({ keyboardType, onChangeText, placeholder, value }) {
    return (
        <View style={styles.container}>
            <TextInputMask
                style={styles.input}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                options={{
                    format: 'DD/MM/YYYY'
                }}
                placeholder={placeholder}
                type="datetime"
                value={value}
            />
        </View>
    )
}