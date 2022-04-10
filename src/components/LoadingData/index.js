import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { styles } from './styles'

export default function LoadingData() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color='#000' />
        </View>
    )
}