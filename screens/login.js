import React, { useState } from 'react';
import { Text,View,TextInput,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';


const Login = ({ navigation} ) => {

    const onPressHandler = () => {
        navigation.navigate('Home');
      }

    return (
        <View style={styles.container} >
            <Text style={styles.header}>Mood</Text>
            <Text style={styles.headerTwo}>Logger.</Text>

            

      <TouchableOpacity style={styles.startBtn}
      onPress={onPressHandler}
      >
        <Text style={styles.btnText}>START</Text>
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
        fontSize:100,
        paddingTop:55,
        paddingLeft:15,
        color:'white',
        textAlign:'center',
        top:40,
    },
    headerTwo:{
        fontSize:110,
        paddingLeft:15,
        color:'white',
        marginBottom:25,
        textAlign:'center',
        top:40,
        fontWeight:'bold'
    },
    startBtn:{
        width:'80%',
        borderRadius:45,
        height:80,
        alignItems:'center',
        justifyContent:'center',
        marginTop:95,
        backgroundColor:'white',
        marginLeft:40,
        top:80
    },
    btnText:{
      fontSize:35
    }
  });

export default Login;