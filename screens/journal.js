import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const Journal = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.subtitle}>Journal</Text>

            <View style={styles.journal}>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#7d7a9f',
        height:Dimensions.get('window').height +25,
    },
    subtitle:{
        color:'white',
        fontSize:25,
        paddingTop:25
    },
    journal:{
        backgroundColor:'#FFFFCC',
        paddingBottom:200
    },
})


export default Journal;