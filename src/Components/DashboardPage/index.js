import { Text, View, StyleSheet, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-web";

export default function Cartao(props){
    return(
        <View style={styles.container}>
            <View style ={styles.viewImg}>
                <Image source={{
                    uri: props.cartao.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.nome}>Nome do Item: {props.cartao.nome}</Text>
                <Text style={styles.descricao}>Descrição: Abaixo está evidenciando o ataque e a fraqueza de cada item do RPG. </Text>
                <Text style={styles.ataque}>Ataque: {props.cartao.ataque}</Text>
                <Text style={styles.defesa}>Fraqueza:{props.cartao.defesa}</Text>
                <TouchableOpacity style={styles.btn} title="Trocar">
                    <Text style = {styles.ButtonText}>TROCAR</Text>
                 </TouchableOpacity>   
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '70%',
        flexDirection: 'row',
        padding: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#3385ff',
    },
    viewImg: {
        width: '30%',
        height: 150,
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    viewData:{
        padding: 10,
        width: '70%',
        height: '100%',
        borderRadius: 10
    },
    classe:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    },
    nome: {
        fontSize: 18,
        color: 'white',
        marginBottom: 5
    },
    ataque: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5
    },
    defesa: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5
    },
    descricao:{
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 2
    },
    btn: {
        backgroundColor: 'white',
        height: 40,
        width: 80,
        borderWidth: 2,
        borderRadius: 10,
        allignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    Text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    }
}); 