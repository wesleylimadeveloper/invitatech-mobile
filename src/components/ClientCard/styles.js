import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 10,
    },
    name: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 0,
        marginBottom: 2,
        marginTop: 2,
    },
    birth: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        marginBottom: 2,
    },
    gender: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        marginBottom: 5,
    },
})