import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, Image , StatusBar, KeyboardAvoidingView} from 'react-native';
import Carousel from 'react-native-card-carousel-animated';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Home = ({navigation}) => {

    const [date, setDate] = useState('');
    const [journalText,setJournalText] = useState('');

    const onPressHandler = () => {
        navigation.navigate('Journal',{
            journalText,date
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

    const activity = [
        {
            id: '1',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Working</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/briefcase.png')}
                    />
                    
                </View>
            ),
        },
        {
            id: '2',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Working Out</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/workout2.png')}
                    />
                </View>
            )
        },
        {
            id: '3',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Chlling</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/pad.png')}
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

            <Text style={styles.subtitle2}>What are you doing?</Text>
            <View style={styles.carousel2}>
            <Carousel cards={activity} />
            </View>


            
            <Text style={styles.inputText}>Who are you with?</Text>
            <KeyboardAvoidingView
            keyboardVerticalOffset={60}
            >
            <View style={styles.inputView}>
                <TextInput
                 style={styles.textInput}
                 placeholderTextColor="white"
                 placeholder='Mikey from work'
                 placeholderTextColor="grey"
                />
            </View>
            </KeyboardAvoidingView>

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
    subtitle2:{
        color:'white',
        fontSize:24,
        textAlign:'center',
        bottom:50
    },
    carousel:{
        bottom:80,
        height: 230,
        marginLeft:25,
        marginRight:25
    },
    carousel2:{
        bottom:140,
        height: 230,
        marginLeft:25,
        marginRight:25
    },
    cards:{
        backgroundColor:'#7d7a9f',
        width: '100%',
        height: '100%',
        alignItems:'center',
    },
    cardText:{
        color:'white', 
        fontSize:15,
        marginBottom:10
    },
    image:{
        flex: 1,
    width: '100%',
    resizeMode: 'contain',
    },
    inputView:{
        backgroundColor:'#64627f',
        borderRadius:30,
        width:'70%',
        height:50,
        marginBottom:25,
        alignItems:'center',
        marginLeft:55,
        bottom:110,
    },
    textInput:{
        height:50,
        flex:1,
        marginLeft:10,
        paddingRight:100,
        color:'white',
    },
    inputText:{
        color:'white',
        fontSize:24,
        textAlign:'center',
        marginBottom:15, 
        bottom:120,
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
        bottom:90,
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