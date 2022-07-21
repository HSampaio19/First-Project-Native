import React, { Component } from 'react';

import { Container, Form, Input} from './styles';
import { SubmitButton } from '../../components/SubmitButton';
import { Keyboard } from 'react-native';

import Api from '../../services/api';

export default class Main extends Component{

  state={
    newUser: '',
    users:[],
  }

  handleAddUser = async() => {
    const {users, newUser} = this.state

    const response = await Api.get(`/users/${newUser}`)

    const data ={
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url
    }

    this.setState({
      users: [...users, data],
      newUser: ''
    })
    Keyboard.dismiss()

    return (
      users.map(user => {
        return(
          <ListUser>{user.email}</ListUser>
        )
      })
    )
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
      <SubmitButton onPress={this.handleAddUser} icon={"add"}/>
    </Form>
  </Container>
  )}
}




