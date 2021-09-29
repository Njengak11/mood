import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Home = ({navigation}) => {

    const onPressHandler = () => {
        navigation.navigate('Journal');
      }


    return(
        <TouchableOpacity style={styles.journalBtn}
        onPress={onPressHandler}
        >
          <Text>Journal</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    journalBtn:{
        width:'80%',
        borderRadius:25,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:40,
        backgroundColor:'white',
        marginLeft:40
    },
})
export default Home;