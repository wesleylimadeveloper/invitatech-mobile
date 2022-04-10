import React, { useState, useEffect } from 'react'
import { Alert, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Entypo from '@expo/vector-icons/Entypo'

import Input from '../../components/Input'
import CepInput from '../../components/CepInput'
import Button from '../../components/Button'
import api from '../../server/api'
import { styles } from './styles'

export default function AddressEdit() {
    const navigation = useNavigation()
    const route = useRoute()
    const address_id = route.params

    const [clientId, setClientId] = useState('')
    const [cep, setCep] = useState('')
    const [publicArea, setPublicArea] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')
    const [district, setDistrict] = useState('')
    const [uf, setUf] = useState('')

    const client_id = clientId

    async function fetchData() {
        try {
            const { data } = await api.get(`/addresses/address/${address_id}`)
            const { client_id, cep, public_area, number, complement, district, uf } = data[0]

            setClientId(client_id)
            setCep(cep)
            setPublicArea(public_area)
            setNumber(number)
            setComplement(complement)
            setDistrict(district)
            setUf(uf)

        } catch (error) {
            console.log(error)
        }
    }

    async function handleSalvar() {
        const address = {
            "cep": cep.trim(),
            "public_area": publicArea.trim(),
            "number": number.trim(),
            "complement": complement.trim(),
            "district": district.trim(),
            "uf": uf.trim()
        }

        if (cep.trim() === '' || publicArea.trim() === '' || number.trim() === '' || uf.trim() === '') {
            Alert.alert('Campos inválidos', 'Com exceção dos campos de complemento e bairro, todos os campos são obrigatórios.')
        } else {
            try {
                const { status } = await api.put(`/addresses/${address_id}`, address)

                if (status === 200) {
                    navigation.navigate('RegisteredAddresses', client_id)

                    Alert.alert('Dados atualizados', 'Endereço atualizado com sucesso!')

                } else {
                    Alert.alert('Erro', 'Não foi possível atualizar o endereço.')
                }

            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    async function handleCadastrar() {
        const address = {
            "client_id": client_id,
            "cep": cep.trim(),
            "public_area": publicArea.trim(),
            "number": number.trim(),
            "complement": complement.trim(),
            "district": district.trim(),
            "uf": uf.trim()
        }

        if (cep.trim() === '' || publicArea.trim() === '' || number.trim() === '' || uf.trim() === '') {
            Alert.alert('Campos inválidos', 'Com exceção dos campos de complemento e bairro, todos os campos são obrigatórios.')
        } else {
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

                } else {
                    Alert.alert('Erro', 'Não foi possível cadastrar o endereço.')
                }

            } catch (error) {
                console.log(error)
            }
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
                title="Salvar"
                onPress={handleSalvar}
            />
        </View>
    )
}