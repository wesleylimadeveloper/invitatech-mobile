import React, { useState } from 'react'
import { Alert, Keyboard, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Entypo from '@expo/vector-icons/Entypo'

import Input from '../../components/Input'
import CepInput from '../../components/CepInput'
import Button from '../../components/Button'
import api from '../../server/api'
import { styles } from './styles'

export default function AddressRegistration() {
    const route = useRoute()
    const client_id = route.params

    const [cep, setCep] = useState('')
    const [publicArea, setPublicArea] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')
    const [district, setDistrict] = useState('')
    const [uf, setUf] = useState('')

    async function handleCadastrar() {
        const address = {
            "client_id": client_id,
            "cep": cep,
            "public_area": publicArea.trim(),
            "number": number.trim(),
            "complement": complement.trim(),
            "district": district.trim(),
            "uf": uf.trim()
        }

        if (cep === '' || publicArea.trim() === '' || number.trim() === '' || uf.trim() === '') {
            return Alert.alert('Campos inválidos', 'Com exceção dos campos de complemento e bairro, todos os campos são obrigatórios.')
        }

        try {
            const { status } = await api.post('/addresses', address)

            if (status === 200) {
                Alert.alert('Cadastro realizado', 'Endereço cadastrado com sucesso!')

                setCep('')
                setPublicArea('')
                setNumber('')
                setComplement('')
                setDistrict('')
                setUf('')

                Keyboard.dismiss()

            } else {
                Alert.alert('Erro', 'Não foi possível cadastrar o endereço.')
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
                <Entypo name='address' size={100} />
            </View>

            <CepInput
                keyboardType="number-pad"
                onChangeText={setCep}
                placeholder="CEP"
                type="zip-code"
                value={cep}
            />

            <Input
                onChangeText={setPublicArea}
                placeholder="Logradouro"
                value={publicArea}
            />

            <Input
                keyboardType="number-pad"
                onChangeText={setNumber}
                placeholder="Número"
                value={number}
            />

            <Input
                onChangeText={setComplement}
                placeholder="Complemento"
                value={complement}
            />

            <Input
                onChangeText={setDistrict}
                placeholder="Bairro"
                value={district}
            />

            <Input
                onChangeText={setUf}
                placeholder="UF"
                value={uf}
            />

            <Button
                title="Cadastrar"
                onPress={handleCadastrar}
            />
        </View>
    )
}