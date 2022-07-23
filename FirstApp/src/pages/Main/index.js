import React, { Component } from 'react';

import { Container, Form, Input, List, User, Avatar, Name, Bio} from './styles';
import { StyledButton } from '../../components/StyledButton';
import { Keyboard} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import Api from '../../services/api';
import PropTypes from 'prop-types'

export default class Main extends Component{

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired
  }


  state={
    newUser: '',
    users:[],
    loading: false
  }

async componentDidMount(){
  const users = await AsyncStorage.getItem('users')

  if(users){
    this.setState({users: JSON.parse(users)})
  }
}

componentDidUpdate(prevProps, prevState){
  const {users} = this.state

  if(prevState.users != users){
    AsyncStorage.setItem('users', JSON.stringify(users))
  }
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

handleNavigate = (user) =>{

  const {navigation} = this.props

  navigation.navigate('Usuario', {user})
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
              onPress={() => this.handleNavigate(item)}
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




