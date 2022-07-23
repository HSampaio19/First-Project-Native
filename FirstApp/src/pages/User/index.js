import React, { Component } from 'react';
import  {Container,Header, Avatar, Name, Bio,Stars, Starred, OwnerAvatar,Title, Info, Author} from './styles'
import Api from '../../services/api';


export default class User extends Component{

  state = {
    stars: []
  }

  async componentDidMount(){

    const {user} = this.props.route.params

    const response = await Api.get(`/users/${user.login}/starred`)

    this.setState({stars: response.data})
  }

  render(){

    const {stars} = this.state
    const {user} = this.props.route.params


    return (
      <Container>
        <Header>
          <Avatar source={{uri: user.avatar}}/>
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        <Stars
          data={stars}
          KeyExtractor={String(stars.id)}
          renderItem={({item})=>(
            <Starred>
              <OwnerAvatar source={{uri: item.owner.avatar_url}}/>
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
  )
  }

}

