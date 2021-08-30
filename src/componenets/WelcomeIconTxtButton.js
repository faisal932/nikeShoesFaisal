import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { w, h } from "react-native-responsiveness";
export const WelcomeIconTxtButton = (props) => {
    return (
        <View style = {styles.container} >
            <Image source = {props.src} style={styles.imgstyle} />
            <View style={styles.imgcontainerstyle} >
            <Text style={styles.txtstyle} >{props.text}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        width:'40%',
    height: h('7%'),
        flexDirection: 'row',
        borderRadius: h('1%'),
        backgroundColor:'#FFFFFF',
        margin:h('6%'),
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    imgstyle:{
        resizeMode: 'contain',
        height:h('6.5%'),
        width:'20%',
        // backgroundColor:'blue'
    },
    txtstyle:{
        // paddingLeft:h('1%'),
        fontSize: h('3%'),
        color: '#696C79',
        fontSize: h('2%')
    },
    imgcontainerstyle:{
        alignItems:'center',
        justifyContent:'center',
    },
})
