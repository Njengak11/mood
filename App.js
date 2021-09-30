
import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Login from './screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Journal from './screens/journal';
import Home from './screens/Home';

const Stack = createStackNavigator();



export default class App extends Component {

render(){
  return(
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
        />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
        />
         <Stack.Screen
        name="Journal"
        component={Journal}
        options={{
          headerStyle: {
            backgroundColor: '#7d7a9f',
          },
          headerTintColor:'#fff'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
  },
  
});
