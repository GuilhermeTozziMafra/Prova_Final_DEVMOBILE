import { TextInput, SafeAreaView, View, Image} from "react-native";
import { Link } from "@react-navigation/native";
import styles from "./style";

export default function Login(){
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
                <TextInput style={styles.inputSenha} placeholder='          Digite sua senha'/>
            </View>
            <View style={styles.viewConfirmar}>
                <Link style={styles.btnConfirmar} to={{screen: "RGPlist"}}>Confirmar</Link>
            </View>
            <View style={styles.viewLink}>
                <Link style={styles.link} to={{screen: "Register"}}>Faça seu cadastro</Link>
                <Link style={styles.link} to={{screen: "ForgotPassword"}}>Esqueci minha senha</Link>
            </View>
        </SafeAreaView>
    )
}