import { TextInput, SafeAreaView, View, Image} from "react-native";
import styles from "./style"; 
import { Link } from "@react-navigation/native";


export default function ForgotPassword(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.viewImg}>
                <Image 
                    style={styles.logoImg}
                    source={{uri: 'https://i.pinimg.com/236x/84/d3/37/84d33764dee8d546869896f78df17b9e--design-ui-game-design.jpg'}}
                />
            </View>
            <View style={styles.inputs}>
                <TextInput style={styles.inputEmail} placeholder='          Digite seu email'/>
                <TextInput style={styles.inputSenha} placeholder='     Escreva sua nova senha'/>
                <TextInput style={styles.inputSenhaNovamente} placeholder='  Digite a senha novamente'/>
            </View>
            <View style={styles.viewConfirmar}>
                <Link style={styles.btnConfirmar} to={{screen: "MoviesPage"}}>Confirmar</Link>
            </View>
            <View style={styles.viewLink}>
                <Link style={styles.link} to={{screen: "Login"}}>Volte ao menu principal</Link>
            </View>
        </SafeAreaView>
    )
}