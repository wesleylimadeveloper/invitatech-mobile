import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import RegisteredClients from '../screens/RegisteredClients'
import RegisteredAddresses from '../screens/RegisteredAddresses'
import AddressEdit from '../screens/AddressEdit'
import AddressRegistration from '../screens/AddressRegistration'
import ClientEdit from '../screens/ClientEdit'
import ClientRegistration from '../screens/ClientRegistration'

const { Navigator, Screen } = createNativeStackNavigator()

export default function AppRoutes() {
    return (
        <Navigator initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 22
                }
            }}>
            <Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name="RegisteredClients"
                component={RegisteredClients}
                options={{
                    headerTitle: 'Clientes'
                }}
            />

            <Screen
                name="RegisteredAddresses"
                component={RegisteredAddresses}
                options={{
                    headerTitle: 'Endereços'
                }}
            />

            <Screen
                name="AddressEdit"
                component={AddressEdit}
                options={{
                    headerTitle: 'Editar endereço'
                }}
            />

            <Screen
                name="AddressRegistration"
                component={AddressRegistration}
                options={{
                    headerTitle: 'Cadastro de endereço'
                }}
            />

            <Screen
                name="ClientEdit"
                component={ClientEdit}
                options={{
                    headerTitle: 'Editar cliente'
                }}
            />

            <Screen
                name="ClientRegistration"
                component={ClientRegistration}
                options={{
                    headerTitle: 'Cadastro de cliente'
                }}
            />
        </Navigator>
    )
}