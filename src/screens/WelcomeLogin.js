import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { WelcomeLoginSecondhalf } from '../componenets'
import {w,h} from 'react-native-responsiveness';
export const WelcomeLogin = () => {
    return (
        <View style={styles.container} >
           <Image source = {require('../assets/nikelogowelcome.png')} style = {styles.img} />
           <Image source = {require('../assets/girlImageWelcome.png')} style = {styles.womenimgstyle} />
           <WelcomeLoginSecondhalf />
           
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f0f0f0',
        flex:1
    },
    img:{
        alignItems: 'flex-start',
        margin: h('2%'),
        marginTop: h('4%'),
        
    },
    womenimgstyle:{
        alignSelf: 'center',
        margin: h('3%'),
        height: h('14%'),
        resizeMode: 'contain'
    },
    txtcontainer:{
        backgroundColor: 'green',
        flexDirection: 'row'
    }
})
