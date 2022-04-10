import React, { useState, useEffect } from 'react'
import { Alert, Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RadioButton } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons'

import Input from '../../components/Input'
import DateTimeInput from '../../components/DateTimeInput'
import Button from '../../components/Button'
import { styles } from './styles'
import api from '../../server/api'

export default function ClientEdit() {
    const navigation = useNavigation()
    const route = useRoute()
    const client_id = route.params

    const [name, setName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [gender, setGender] = useState('')

    const day = birthDate[0] + birthDate[1]
    const month = birthDate[3] + birthDate[4]
    const year = birthDate[6] + birthDate[7] + birthDate[8] + birthDate[9]
    const formatedDate = `${year}-${month}-${day}`

    async function fetchData() {
        try {
            const { data } = await api.get(`/clients/${client_id}`)
            const { client_name, client_birth, client_gender } = data[0]

            setName(client_name)
            setBirthDate(client_birth)
            setGender(client_gender)

        } catch (error) {
            console.log(error)
        }
    }

    async function handleSalvar() {
        const client = {
            "name": name.trim(),
            "birth": formatedDate,
            "gender": gender
        }

        if (name.trim() === '' || birthDate === '' || gender === '') {
            Alert.alert('Campos inválidos', 'Por favor, preencha todos os campos.')
        }

        try {
            const { status } = await api.put(`/clients/${client_id}`, client)

            if (status === 200) {
                navigation.navigate('RegisteredClients')

                Alert.alert('Dados atualizados', 'Cliente atualizado com sucesso!')

            } else {
                Alert.alert('Erro', 'Não foi possível atualizar os dados.')
            }

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <View style={styles.container}>

            <View style={styles.iconWrapper}>
                <Ionicons name='person-circle' size={120} />
            </View>

            <Input
                onChangeText={setName}
                placeholder="Nome"
                value={name}
            />

            <DateTimeInput
                keyboardType="number-pad"
                onChangeText={setBirthDate}
                placeholder="Data de nascimento"
                value={birthDate}
            />

            <View style={styles.radioContainer}>
                <View style={styles.radioOption}>
                    <RadioButton
                        color='#000'
                        uncheckedColor='#000'
                        value="masculino"
                        status={gender === 'masculino' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('masculino')}
                    />

                    <Text style={styles.gender}>Masculino</Text>
                </View>

                <View style={styles.radioOption}>
                    <RadioButton
                        color='#000'
                        uncheckedColor='#000'
                        value="feminino"
                        status={gender === 'feminino' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('feminino')}
                    />

                    <Text style={styles.gender}>Feminino</Text>
                </View>
            </View>

            <Button
                title="Salvar"
                onPress={handleSalvar}
            />
        </View>
    )
}