import React, { useState } from 'react'
import { Alert, Keyboard, Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons'

import Input from '../../components/Input'
import DateTimeInput from '../../components/DateTimeInput'
import Button from '../../components/Button'
import api from '../../server/api'
import { styles } from './styles'

export default function ClientRegistration() {
    const [name, setName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [gender, setGender] = useState('')

    const day = birthDate[0] + birthDate[1]
    const month = birthDate[3] + birthDate[4]
    const year = birthDate[6] + birthDate[7] + birthDate[8] + birthDate[9]
    const formatedDate = `${year}-${month}-${day}`

    async function handleCadastrar() {
        const client = {
            "name": name.trim(),
            "birth": formatedDate,
            "gender": gender
        }

        if (name.trim() === '' || birthDate === '' || gender === '') {
            return Alert.alert('Campos inválidos', 'Por favor, preencha todos os campos.')
        }

        try {
            const { status } = await api.post('/clients', client)

            if (status === 200) {
                Alert.alert('Cadastro realizado', 'Cliente cadastrado com sucesso!')

                setName('')
                setBirthDate('')
                setGender('')

                Keyboard.dismiss()

            } else {
                Alert.alert('Erro', 'Não foi possível cadastrar o cliente.')
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <View
            style={styles.container}
            showsVerticalScrollIndicator={false}>

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
                title="Cadastrar"
                onPress={handleCadastrar}
            />
        </View>
    )
}