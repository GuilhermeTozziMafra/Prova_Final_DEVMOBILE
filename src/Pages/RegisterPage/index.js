import { TextInput, SafeAreaView, View, Image} from "react-native";
import styles from "./style"; 
import { Link } from "@react-navigation/native";

export default function Register(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.viewImg}>
                <Image 
                    style={styles.logoImg}
                    source={{uri: 'https://i.pinimg.com/236x/84/d3/37/84d33764dee8d546869896f78df17b9e--design-ui-game-design.jpg'}}
                />
            </View>
            <View style={styles.inputs}>
                <TextInput style={styles.inputNome} placeholder='           Digite seu nome'/>
                <TextInput style={styles.inputSobrenome} placeholder='      Digite seu sobrenome'/>
                <TextInput style={styles.inputEmail} placeholder='          Informe seu email'/>
                <TextInput style={styles.inputSenha} placeholder='          Digite sua senha...'/>
                <TextInput style={styles.inputConfirmarSenha} placeholder='       Confirme sua senha...'/>
            </View>
            <View style={styles.viewConfirmar}>
                <Link style={styles.btnConfirmar} to={{screen: "MoviesPage"}}>Confirmar</Link>
            </View>
            <View style={styles.viewLink}>
                <Link style={styles.link} to={{screen: "Login"}}>Volte ao Menu Principal</Link>
            </View>
        </SafeAreaView>
    )
}