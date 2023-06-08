import React, {Component} from "react";
import { View, Text, Image } from "react-native";

class App extends Component{
  render(){
    let nome = "Ricardo";
    let img = "https://sujeitoprogramador.com/steve.png";
    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro APP!!!</Text>
        <Text style= {{ color: "red", fontSize: 25, margin: 15}}>
          Teste
        </Text>
        <Image
        source={{ uri: img }}
        style={{ width: 300, height: 300}}
        />
        <Text style={{ fontSize: 30}}>{nome}</Text>
      </View>
    )
  }
}
export default App;