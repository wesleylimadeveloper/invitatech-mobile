import React from 'react'
import { Alert, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

import api from '../../server/api'
import { styles } from './styles'

import Button from '../Button'

export default function ClientCard({ client }) {
    const { client_id, client_name, client_birth, client_gender } = client
    const gender = client_gender[0].toUpperCase() + client_gender.substr(1)

    const navigation = useNavigation()

    async function handleExcluir() {
        try {
            const { status } = await api.delete(`/clients/${client_id}`)

            if (status === 200) {
                Alert.alert('Excluído', 'Cliente excluído com sucesso!')
            } else {
                Alert.alert('Erro', 'Não foi possível excluir o cliente.')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Ionicons name={client_gender === 'masculino' ? 'man' : 'woman'} size={40} />

            <Text style={styles.name}>{client_name}</Text>

            <Text style={styles.birth}>{client_birth}</Text>

            <Text style={styles.gender}>{gender}</Text>

            <Button
                title="Endereços"
                onPress={() => navigation.navigate('RegisteredAddresses', client_id)}
            />

            <Button
                title="Cadastrar endereço"
                onPress={() => navigation.navigate('AddressRegistration', client_id)}
            />

            <Button
                title="Editar cliente"
                onPress={() => navigation.navigate('ClientEdit', client_id)}
            />

            <Button
                title="Excluir cliente"
                onPress={handleExcluir}
            />
        </View>
    )
}