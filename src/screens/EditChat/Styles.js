import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#131519',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    input: {
        backgroundColor: '#27272a',
        flexDirection: 'row',
        textAlign: 'center',
        color: '#9CE5C9',
        width: '70%',
        height: 48,
        marginBottom: 24,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginTop: 8
    },
    containerButton: {
        flexDirection: "row",
        marginTop: 16,
        width: '95vw',
        justifyContent: 'space-evenly'
    }, 
    buttonDelete: {
        backgroundColor: 'red',
        height: 48,
        width: '40vw',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonConfirm: {
        backgroundColor: '#93e670',  
        width: '40vw',
        height: 48,
        justifyContent: 'center',
        borderRadius: 8,
    }


})

export default Styles