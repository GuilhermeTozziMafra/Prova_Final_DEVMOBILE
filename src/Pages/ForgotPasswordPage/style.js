import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6959CD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewImg:{
        width: '43%',
        height: '20%',
    },
    logoImg:{
        width: '100%',
        height: '100%',
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'black',
    },
    inputs: {
        padding: 10,
    },
    inputEmail: {
        height: 30,
        padding: 5,
        color: 'yellow',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        marginBottom: 6,
    },
    inputSenha: {
        height: 30,
        padding: 5,
        color: 'yellow',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        marginBottom: 6,
    },
    inputSenhaNovamente: {
        height: 30,
        padding: 5,
        color: 'yellow',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
    },
    viewConfirmar:{
        padding: 5,
    },
    btnConfirmar:{
        height: 30,
        padding: 5,
        backgroundColor: 'black',
        borderRadius: 4,
        color: 'white',
        fontWeight: 'bold',
    },
    viewLink:{
        flexDirection: 'row',
        padding: 5,
    },
    link:{
        color: 'white',
        padding: 5
    },
})
export default styles;