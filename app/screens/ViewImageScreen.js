import React from 'react';
import { Image,StyleSheet, View } from 'react-native';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (

        <View  style={styles.container}>

         <View  style={styles.closeIcon}></View>
         <View  style={styles.deleteIcon}></View>

   
         <Image 
        style={styles.image}
        source={require('../assets/pic.webp')}/> 

        </View>
        
    );
}


const styles = StyleSheet.create({

    closeIcon:{
        width:50,
        height:50,
        backgroundColor:'#fc5c65',
        position:"absolute",
        top:40,
        left:30,

    },

    deleteIcon:{
        width:50,
        height:50,
        backgroundColor:'#4ecdc4',
        position:"absolute",
        top:40,
        right:30,

    },

    container:{
        backgroundColor:'#000',
        flex:1,

    },
    image:{
        top:100,
        width:'100%',
        height:'80%',
       
       
    },
    
});

export default ViewImageScreen;