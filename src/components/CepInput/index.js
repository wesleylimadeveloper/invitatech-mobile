import React from 'react'
import { View } from 'react-native'

import { TextInputMask } from 'react-native-masked-text'
import { styles } from './styles'

export default function CepInput({ keyboardType, onChangeText, placeholder, value }) {
    return (
        <View style={styles.container}>
            <TextInputMask
                style={styles.input}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                placeholder={placeholder}
                type="zip-code"
                value={value}
            />
        </View>
    )
}