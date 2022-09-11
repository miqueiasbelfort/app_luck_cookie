import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textFrase: 'Vamos ver qual a lição de hoje?',
      img: require("./src/biscoito.png"),
      viewBtn: false
    };

    this.viewLuck = this.viewLuck.bind(this)

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que o conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbivio, pense no improvável e conquiste o impossivel.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ]
  }

  viewLuck(){
    const numAleatorio = Math.floor(Math.random() * this.frases.length)
    this.setState({
      textFrase: this.frases[numAleatorio],
      img: require('./src/biscoitoAberto.png'),
      viewBtn: true
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        
        <Image 
          source={this.state.img}
          style={styles.img}
        />
  
        <Text style={styles.text}>"{this.state.textFrase}"</Text>
  
        {
          !this.state.viewBtn ? 
          <TouchableOpacity style={styles.button} onPress={this.viewLuck}>
            <View style={styles.btnContainer}>
              <Text style={styles.btnText}>Abrir Cookie</Text>
            </View>
          </TouchableOpacity>
          : <View style={styles.openCookie}>
            <Text style={styles.textOpenCookie}>Agora vá e pratique o que aprendeu hoje!</Text>
          </View>
        }
  
      </View>
    );
  }
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
  text: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: 'italic',
    textAlign: "center",
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#dd7b22"
  },
  openCookie: {

  },
  textOpenCookie: {
    fontSize: 18,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "#dd7b22",
    color: "#dd5e22"
  }
});
