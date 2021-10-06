import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity,TouchableWithoutFeedback, Image , StatusBar, KeyboardAvoidingView, Platform,Button, keyboard  } from 'react-native';
import Carousel from 'react-native-card-carousel-animated';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Home = ({navigation}) => {

    const [date, setDate] = useState('');
    const [journalText,setJournalText] = useState('');

    const onPressHandler = () => {
        navigation.navigate('Journal',{
            paramKey:journalText,
            paramKey:date
        });
      }

      const mood = [
        {
            id: '1',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Happy</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/happy.png')}
                    />
                    
                </View>
            ),
        },
        {
            id: '2',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Sad</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/sad.png')}
                    />
                </View>
            )
        },
        {
            id: '3',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Angry</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/angry.png')}
                    />
                </View>
            )
        },
        {
            id: '4',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Surprised</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/surprise.png')}
                    />
                </View>
            )
        },
        {
            id: '5',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Fear</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/fear.png')}
                    />
                </View>
            )
        },
        {
            id: '6',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Okay</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/neutral.png')}
                    />
                </View>
            )
        },
        {
            id: '7',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Tired</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/tired.png')}
                    />
                </View>
            )
        },
        {
            id: '8',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Confident</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/cool.png')}
                    />
                </View>
            )
        },
        {
            id: '9',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Relaxed</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/relax.png')}
                    />
                </View>
            )
        },
    ];


    
    return(
        <View style={styles.container}>
             <StatusBar backgroundColor="#7d7a9f"  />
            <Text style={styles.subtitle}>How are you feeling today?</Text>
            
            
			<View style={styles.carousel}>
            <Carousel cards={mood} />
            </View>

            <View style={styles.wrapper}>
            <Text style={styles.wrapperSubtitle}>Why do you feel this way?</Text>
            <View style={styles.inputContainer}>
            <KeyboardAvoidingView
behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
>
<TextInput
                    style={styles.wrapperInput}
                    placeholder='Date..'
                    value={date}
                    onChangeText={(date) => setDate(date)}
                    /> 

                   <TextInput
                    style={styles.wrapperInput}
                    placeholder='I felt this way because...'
                    value={journalText}
                    onChangeText={(journalText) => setJournalText(journalText)}
                    /> 
                </KeyboardAvoidingView>
            </View>
 
                </View>   
            <TouchableOpacity style={styles.journalBtn}
        onPress={onPressHandler}>
          <Text style={styles.btnText}>Go to journal</Text>
          <FontAwesome style={styles.icon}
          name='angle-right'
          size={40}
          color='white'
          />
        </TouchableOpacity>
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
        textAlign:'center',
        top:20
    },
    carousel:{
        bottom:59,
        height: 230,
        marginLeft:25,
        marginRight:25
    },
    cards:{
        backgroundColor:'#7d7a9f',
        width: 350,
        height: 120,
        alignItems:'center',
    },
    cardText:{
        color:'white', 
        fontSize:15,
    },
    image:{
        flex: 1,
    width: '100%',
    resizeMode: 'contain',
    },
    wrapper:{ 
        backgroundColor:'#fce1b8',
        paddingBottom:50,
        borderRadius:30,
    },
    wrapperSubtitle:{
        color:'white',
        fontSize:24,
        paddingTop:25,
        textAlign:'center',
    },
    inputContainer:{
        backgroundColor:'white',
        top:10,
        marginLeft:25,
        marginRight:25,
        borderRadius:20,
        paddingBottom:200
    },
    wrapperInput:{
       marginTop:15,
       paddingLeft:25,
    },
    journalBtn:{
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        backgroundColor:'white',
        paddingLeft:50,
        height:70,
        backgroundColor:'#fce1b8',
        marginLeft:20,
        marginRight:20,
    },
    btnText:{
        color:'white',
        fontSize:24,
        top:18,
        textAlign:'center',
        right:20
    },
    icon:{
        left:130,
        bottom:17
    },


   
})
export default Home;

