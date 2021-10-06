import React from 'react';
import { StyleSheet, Text, View, Dimensions,  } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Journal = ({route}) => {

   
    return(
        <View style={styles.container}>
            <Text style={styles.subtitle}>Your journal history</Text>
            
            <View style={styles.journalContainer}>
                
                <Text style={styles.journalEntry}>{route.params.paramKey}</Text>
                <Text style={styles.journalEntry}>{route.params.paramKey}</Text>
                
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
        paddingLeft:25,
        fontSize:20,
        color:'white'
    }
})


export default Journal;