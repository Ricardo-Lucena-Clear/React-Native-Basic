import React, {Component} from "react";
import { View, Text, Image } from "react-native";

class App extends Component{
  render(){
    let nome = "Ricardo";
    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro APP!!!</Text>
        <Text style= {{ color: "red", fontSize: 25, margin: 15}}>
          Teste
        </Text>
        <Text style={{ fontSize: 30}}>{nome}</Text>
        <Jobs largura={500} altura={200}/>
      </View>
    )
  }
}

class Jobs extends Component{
  render(){
    let img = "https://sujeitoprogramador.com/steve.png";
    return(
      <View>
        <Image
          source={{ uri: img }}
          style={{ width: this.props.largura, height: this.props.altura}}
        />
      <Text>Steve Jobs</Text>  
      </View>
    )
  }
}
export default App;