import React, { useState, useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

import LoadingData from '../../components/LoadingData'
import EmptyData from '../../components/EmptyData'
import AddressCard from '../../components/AddressCard'
import api from '../../server/api'

export default function RegisteredAddresses() {
    const route = useRoute()
    const client_id = route.params

    const [addresses, setAddresses] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()

        async function fetchData() {
            try {
                const { data } = await api.get(`/addresses/${client_id}`, { signal: controller.signal })
                setAddresses(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()

        return () => controller.abort()

    }, [addresses])

    if (loading) {
        return (
            <LoadingData />
        )
    }

    if (addresses.length === 0) {
        return (
            <EmptyData message="Não há endereço cadastrado para esse cliente" />
        )
    } else {
        return (
            <View>
                <FlatList
                    data={addresses}
                    keyExtractor={item => item.address_id.toString()}
                    renderItem={({ item }) => (
                        <AddressCard address={item} />
                    )}
                />
            </View>
        )
    }
}