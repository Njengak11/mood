import React, { useState } from 'react';
import { Text,View,TextInput,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';


const Login = ({ navigation} ) => {

    const onPressHandler = () => {
        navigation.navigate('Home');
      }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container} >
            <Text style={styles.header}>Hello</Text>
            <Text style={styles.headerTwo}>There.</Text>

            <View style={styles.inputView}>
                <TextInput
                style={styles.textInput}
                label='Email Address'
                placeholder='Your Email'
                placeholderTextColor="white"
                onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}
      onPress={onPressHandler}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotBtn}>Forgot Password?</Text>
      </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#7d7a9f',
        height:Dimensions.get('window').height +25,
        
    },
    header:{
        fontSize:120,
        paddingTop:55,
        paddingLeft:15,
        color:'white'
    },
    headerTwo:{
        fontSize:135,
        paddingLeft:15,
        color:'white',
        marginBottom:25
    },
    inputView:{
        backgroundColor:'#64627f',
        borderRadius:30,
        width:'70%',
        height:40,
        marginBottom:25,
        alignItems:'center',
        marginLeft:55
    },
    textInput:{
        height:50,
        flex:1,
        padding:10,
        marginLeft:10
    },
    forgotBtn:{
        height:30,
        marginTop:35,
        marginLeft:150,
        
    },
    loginBtn:{
        width:'80%',
        borderRadius:25,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:40,
        backgroundColor:'white',
        marginLeft:40
    },
    loginText:{

    }
  });

export default Login;