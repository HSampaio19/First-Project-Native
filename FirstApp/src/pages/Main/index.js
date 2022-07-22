import React, { Component } from 'react';

import { Container, Form, Input, List, User, Avatar, Name, Bio} from './styles';
import { StyledButton } from '../../components/StyledButton';
import { Keyboard, ActivityIndicator } from 'react-native';

import Api from '../../services/api';

export default class Main extends Component{

  state={
    newUser: '',
    users:[],
    loading: false
  }

  handleAddUser = async() => {

    const {users, newUser, loading} = this.state

    this.setState({loading: true})

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

    this.setState({loading: false})

  }


  render(){
    const {newUser, users, loading} = this.state
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
      <StyledButton onPress={this.handleAddUser} icon={"add"} loading={loading}/>
    </Form>
      <List
        data={users}
        keyExtractor={user => user.login}
        renderItem={({item})=>(
          <User>
            <Avatar source={{uri: item.avatar}}/>
            <Name>{item.name}</Name>
            <Bio>{item.bio}</Bio>
            <StyledButton
              title={"  Ver Perfil  "}
              OnPress={()=> ok}
              styleProps={{
                alignSelf: "stretch",
              }}
            />
          </User>
        )}
      />
  </Container>
  )}
}




