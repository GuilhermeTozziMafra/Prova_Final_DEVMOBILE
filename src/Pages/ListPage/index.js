import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cartao from '../../Components/DashboardPage';

export default function RPGlist() {
  const cartoes=[
    {
      nome: 'Dragon Sword',
      ataque: '8 pontos',
      defesa: ' A Dragon Sword está sujeita ao desgaste e pode se deteriorar ao longo do tempo com o uso constante.',
      imgUrl: 'https://www.seekpng.com/png/detail/218-2183981_white-dragon-sword.png'
    },
    {
      nome: 'Blood Ring',
      ataque: '6 pontos',
      defesa: ' A fraqueza do Blood Ring seria a sua dependência de sacrifícios ou do derramamento de sangue para manter seu poder ativo.',
      imgUrl: 'https://atlas-content-cdn.pixelsquid.com/stock-images/blood-ring-Q954Yx7-600.jpg'
    },
    {
      nome: 'Dhoran Shield',
      ataque: '3 pontos',
      defesa: ' O escudo de Dhorian é excepcionalmente resistente contra ataques físicos e impactos, mas apresenta uma fraqueza quando exposto a energias mágicas.',
      imgUrl: 'https://republicademagtails.weebly.com/uploads/1/1/6/4/11643319/4703101.jpg'
    }
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cartões de Armas de um jogo RPG:</Text>
       {cartoes.map(c => <Cartao cartao={c}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#483D8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: 'white',
    fontSize: 18 
  }
});