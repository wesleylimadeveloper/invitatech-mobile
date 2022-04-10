import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export default function Button({ onPress, title }) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}