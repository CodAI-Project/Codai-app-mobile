import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    viewImage: {
        height: 180,
        width: '100vw',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem'
    },
    plusoft: {
        width: '40vw',
        height: 130,
        resizeMode: "contain"
    },
    fiap: {
        width: '35vw',
        height: 130,
        resizeMode: "contain"
    },
    viewText: {
        borderTopColor: '#898b8c',
        borderTopWidth: 3
    },
    textFooter: {
        color: '#898b8c',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 18
    }
})

export default Styles;