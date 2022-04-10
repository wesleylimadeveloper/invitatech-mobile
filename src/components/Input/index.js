import React from 'react'
import { TextInput, View } from 'react-native'

import { styles } from './styles'

export default function Input({ keyboardType, onChangeText, placeholder, value }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}
            />
        </View>
    )
}