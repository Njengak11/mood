
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
        />
      <Stack.Screen
        name="Home"
        component={Home}
        />
         <Stack.Screen
        name="Journal"
        component={Journal}
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
