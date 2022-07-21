import React, { Component } from 'react';

import { Container, Form, Input, SubmitButton } from './styles';
import Icon from "react-native-vector-icons/MaterialIcons"

export default class Main extends Component{

  state={
    newUser: '',
    users:[],
  }

  handleAddUser = () => {
    console.tron.log(this.state.newUser)
  }


  render(){
    const {newUser, users} = this.state
    return(
    <Container>
    <Form>
      <Input
        autoCorrect={false}
        autoCaptalize={false}
        placeholder="Adicione usuario"
        value={newUser}
        onChangeText={text => this.setState({newUser: text})}
        returnKeyType='Send'
        onSubmitEditing={this.handleAddUser}
      />
      <SubmitButton
      title='+'
      onPress={this.handleAddUser}>
        <Icon name='add' size={20} color="#FFF"/>
      </SubmitButton>
    </Form>
  </Container>
  )}
}




