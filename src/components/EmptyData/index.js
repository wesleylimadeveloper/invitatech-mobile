import React from 'react'
import { Text, View } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import { styles } from './styles'

export default function EmptyData({ message }) {
    return (
        <View style={styles.container}>
            <FontAwesome5 name='box-open' size={100} />
            <Text style={styles.message}>{message}</Text>
        </View>
    )
}