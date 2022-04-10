import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 30,
    },
    radioContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        width: '70%'
    },
    radioOption: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    gender: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
    }
})