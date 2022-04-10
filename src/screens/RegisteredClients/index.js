import React, { useState, useEffect } from 'react'
import { FlatList, View } from 'react-native'

import LoadingData from '../../components/LoadingData'
import EmptyData from '../../components/EmptyData'
import ClientCard from '../../components/ClientCard'
import api from '../../server/api'

export default function RegisteredClients() {
    const [clients, setClients] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()

        async function fetchData() {
            try {
                const { data } = await api.get('/clients', { signal: controller.signal })
                setClients(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()

        return () => controller.abort()

    }, [clients])

    if (loading) {
        return (
            <LoadingData />
        )
    }

    if (clients.length === 0) {
        return (
            <EmptyData message="Não há cliente cadastrado" />
        )
    } else {
        return (
            <View>
                <FlatList
                    data={clients}
                    keyExtractor={item => item.client_id.toString()}
                    renderItem={({ item }) => (
                        <ClientCard client={item} />
                    )}
                />
            </View>
        )
    }

}