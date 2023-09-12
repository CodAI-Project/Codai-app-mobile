import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#131519',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subTitle: { 
        color: '#fff', 
        fontSize: 16, 
        marginTop: 16, 
        marginBottom: 32 
    },
    inputContainer: {
        backgroundColor: '#27272a',
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        marginBottom: 24,
        borderRadius: 8,
        paddingHorizontal: 12
    },
    inputContainerSenha: {
        backgroundColor: '#27272a',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        width: '70%',
        paddingHorizontal: 12,
        borderRadius: 8
    },
    imgs: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    input: {
        height: 48,
        marginLeft: 16,
        color: '#a1a1aa'
    },
    buttonLogin: {
        backgroundColor: '#93e670', 
        width: '70%', 
        height: 48,
        justifyContent: 'center',
        borderRadius: 8,
    },
    textButtonLogin:{
        textAlign: 'center', 
        fontWeight: 'bold'
    },
    viewGG: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between'
    },
    buttonsGG: {
        width: '45%',
        height: 48,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1d21'
    }

})

export default Styles