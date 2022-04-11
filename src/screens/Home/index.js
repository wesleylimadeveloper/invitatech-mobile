import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

import Logo from '../../assets/logo.png'
import Button from '../../components/Button'
import { styles } from './styles'

export default function Home() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LoremIpsum Logística</Text>

            <Animatable.Image
                style={styles.logo} source={Logo}
                animation='bounceInLeft'
                duration={2000}
            />

            <Button
                title="Clientes"
                onPress={() => navigation.navigate('RegisteredClients')}
            />

            <Button
                title="Cadastrar cliente"
                onPress={() => navigation.navigate('ClientRegistration')}
            />
        </View>
    )
}