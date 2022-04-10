import React from 'react'
import { Alert, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import api from '../../server/api'
import { styles } from './styles'

import Button from '../Button'

export default function AddressCard({ address }) {
    const navigation = useNavigation()

    const { address_id, cep, public_area, number, complement, district, uf } = address

    async function handleExcluir() {
        try {
            const { status } = await api.delete(`/addresses/${address_id}`)

            if (status === 200) {
                Alert.alert('Excluído', 'Endereço excluído com sucesso!')
            } else {
                Alert.alert('Erro', 'Não foi possível excluir o endereço.')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name='home-city' size={40} />

            <Text style={styles.text}>{cep}</Text>

            <Text style={styles.text}>{public_area}, {number}</Text>

            {complement.trim() !== '' ? <Text style={styles.text}>{complement}</Text> : false}

            {district.trim() !== '' ? <Text style={styles.text}>{district} - {uf}</Text> : <Text style={styles.text}>{uf}</Text>}

            <Button
                title="Editar"
                onPress={() => navigation.navigate('AddressEdit', address_id)}
            />

            <Button
                title="Excluir"
                onPress={handleExcluir}
            />
        </View>
    )
}