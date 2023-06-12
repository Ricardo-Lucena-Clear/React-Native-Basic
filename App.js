import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id:'1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com'},
        {id:'2',nome: 'João', idade: 23, email: 'João@João.com'},
        {id:'3',nome: 'Carlos', idade: 18, email: 'Carlos@Carlos.com'},
        {id:'4',nome: 'Pedro', idade: 20, email: 'Pedro@Pedro.com'},
      ]
    }
  }

  render(){
    return(
      <View style={StyleSheet.container}>
      
      <FlatList
      data={this.state.feed}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Pessoa data={item}/>}
      />

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})
export default App;

class Pessoa extends Component{
  render(){
    return(
      <View>
        <Text>Nome: {this.props.data.nome}</Text>
        <Text>Idade: {this.props.data.idade}</Text>
        <Text>Email: {this.props.data.email}</Text>
      </View>
    )
  }
}