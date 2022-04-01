import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {

    clicou = () => {
        Alert.alert("IListed","temos que programar este botao kkk")
    }

  return (
    <View style={styles.container}>

          <Image
              source={require('./assets/IListed.jpg')}
              style={styles.logo}
          />
          <TextInput 
              placeholder='Digite seu E_mail'
              style={styles.input}
          />
          <TextInput
              placeholder='Digite sua Senha'
              secureTextEntry={true}
              style={styles.input}
          />
          <TouchableOpacity
              style={styles.botao}
              onPress={() => { this.clicou() }}

          >
              <Text style={styles.botaoTxt}>Login</Text>
          </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#458',
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo: {
        width: 140,
        height: 130,
        borderRadius: 100
    },
    input: {
        marginTop: 20,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor:'#000000',
        marginTop: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

},

    botaoTxt:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'#fff',
}
});
