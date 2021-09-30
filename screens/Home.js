import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-card-carousel-animated';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Home = ({navigation}) => {

    const onPressHandler = () => {
        navigation.navigate('Journal');
      }

      const data = [
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
                    <Text style={styles.cardText}>Relaxed</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/relaxed.png')}
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
    ];
    return(
        <View style={styles.container}>
            <Text style={styles.subtitle}>How are you feeling today?</Text>
            
            
			<View style={styles.carousel}>
            <Carousel cards={data} />
            </View>

            <View style={{height:5}}></View>

            <View style={styles.explainContainer}>
                <Text style={styles.explainText}>Why do you feel this way?</Text>

                <View style={styles.explainArea}>
                    
                </View>

                <TouchableOpacity style={styles.journalBtn}
        onPress={onPressHandler}
        >
          <Text style={styles.btnText}>Go to journal</Text>
          <FontAwesome style={styles.icon}
          name='angle-right'
          size={40}
          color='white'
          />
        </TouchableOpacity>
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
        paddingLeft:20
    },
    carousel:{
        bottom:100,
        height: 280,
        marginLeft:25,
        marginRight:25
    },
    cards:{
        backgroundColor:'#7d7a9f',
        width: '100%',
        height: '100%',
        paddingTop:18,
        paddingBottom:22,
        alignItems:'center',
        
    },
    cardText:{
        color:'white',
        top:132,
        
    },
    image:{
        flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    },
    explainContainer:{
        backgroundColor:'#FFFFCC',
        paddingBottom:200,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        bottom:100
    },
    explainArea:{
        backgroundColor:'white',
        borderRadius:30,
        marginLeft:35,
        marginRight:35,
        paddingBottom:40,
        height:295,
        top:30
    },
    explainText:{
        fontSize:18,
        color:'#7d7a9f',
        paddingTop:15,
        paddingLeft:20,
        paddingBottom:10,
    },
    journalBtn:{
        width:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginTop:80,
        backgroundColor:'white',
        paddingLeft:40,
        height:70,
        backgroundColor:'#7d7a9f'
    },
    btnText:{
        color:'white',
        fontSize:18,
        top:18,
        alignItems:'center'
    },
    icon:{
        left:130,
        bottom:12
    }
})
export default Home;