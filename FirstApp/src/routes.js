import React from 'react'
import {createAppContainer} from 'react-navigation'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from "./pages/Main"
import User from "./pages/User"


const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle:{
        backgroundColor: '#7159c1',
      },
       headerTintColor: '#FFF',
       headerTintStyle: 'bold'

    }}>
    <Stack.Screen
        name="Principal"
        component={Main}
        options={{title: 'Main'}}
      />
      <Stack.Screen
        name="Usuarios"
        component={User}
        options={{title: 'User'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}



