import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#131519',
        minHeight: '100%'
    },
    bgImageOne: {
        padding: '1.5rem',
        borderColor: '#9ce5c9',
        borderWidth: 1,
        borderRadius: 16
    },
    viewOne: {
        width: '92%',
        marginVertical: '5rem'
    },
    textTitle: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#ffffff'
    },
    textDefault: {
        fontSize: '1rem',
        textAlign: 'center',
        marginBottom: '2rem',
        color: '#ffffff'
    },
    buttons: {
        gap: '2.5rem',
        paddingHorizontal: '3rem'
    },
    buttonOne: {
        padding: '22px',
        backgroundColor: '#9ce5c9',
        borderRadius: '12px'
    },
    buttonOneText: {
        fontWeight: 'bold', 
        textAlign: 'center',
        fontSize: '18px'
    },
    buttonTwo: {
        padding: '22px',
        backgroundColor: 'transparent',
        borderRadius: '12px',
        borderColor: '#fff',
        borderWidth: 1
    },
    buttonTwoText: {
        color: '#fff',
        fontWeight: 'bold', 
        textAlign: 'center',
        fontSize: '16px'
    },
    riskImage:{
        width: '50vw',
        height: 12,
        resizeMode: 'contain',
    },
    viewCards: {
        marginTop: '2.5rem',
        marginBottom: '5rem', 
        alignItems: 'center',
        gap: '1.15rem'
    }
})

export default Styles