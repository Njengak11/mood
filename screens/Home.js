import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-card-carousel-animated';


const Home = ({navigation}) => {

    const onPressHandler = () => {
        navigation.navigate('Journal');
      }

      const data = [
        {
            id: '1',
            child: (
                <View style={styles.cards}>
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

            <View style={styles.explainContainer}>
                <Text style={styles.explainText}>Why do you feel this way?</Text>

                <View style={styles.explainArea}></View>

                <TouchableOpacity style={styles.journalBtn}
        onPress={onPressHandler}
        >
          <Text style={styles.btnText}>Go to journal</Text>
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
        fontSize:18,
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
        bottom:80
    },
    explainArea:{
        backgroundColor:'white',
        borderRadius:30,
        marginLeft:35,
        marginRight:35,
        paddingBottom:40,
        height:270,
        top:30
    },
    explainText:{
        fontSize:18,
        color:'#7d7a9f',
        paddingTop:15,
        paddingLeft:20,
        paddingBottom:10
    },
    journalBtn:{
        width:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginTop:100,
        backgroundColor:'white',
        paddingLeft:40,
        height:70,
        backgroundColor:'#7d7a9f'
    },
    btnText:{
        color:'white',
        fontSize:18,
    },
    
})
export default Home;