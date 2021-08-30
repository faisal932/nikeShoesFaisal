import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { w, h } from "react-native-responsiveness";

export const WelcomeButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.opacitycontainer} >
                <Text style={styles.txtstyle}>{props.txt}</Text>
            </TouchableOpacity>
            
        </View>
    )
}



const styles = StyleSheet.create({
    opacitycontainer:{
        width: '90%',
        alignItems: 'center',
        marginTop: h('4%'),
        padding: h('2%'),
        backgroundColor: '#5780D9',
        borderRadius: h('1%')
    },
    container:{
        alignItems: 'center'
    },txtstyle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: h('2%')
    }
})
