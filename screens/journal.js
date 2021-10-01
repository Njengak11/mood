import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const Journal = ({route}) => {

   
    return(
        <View style={styles.container}>
            <Text style={styles.subtitle}>Your journal history</Text>
            
            <View style={styles.journalContainer}>
            <Text style={styles.journalDate}>{date}</Text>
            <Text style={styles.journalEntry}>{journalText}</Text>
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
        fontSize:24,
        paddingTop:25,
        paddingLeft:20,
        marginBottom:25
        
    },
    journalContainer:{
        backgroundColor:'#fce1b8',
        paddingBottom:800,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    journalDate:{
        paddingLeft:25
    },
    journalEntry:{
        paddingLeft:25
    }
})


export default Journal;