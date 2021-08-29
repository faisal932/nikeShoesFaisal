import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import { WelcomeIconTxtButton, WelcomeTextinput } from '../componenets';

export const WelcomeFirstScreen = () => {
    return (
        <View style={styles.container} >
            <WelcomeIconTxtButton text = "Google" src = {require("../assets/google-symbol.png")} />
            <WelcomeTextinput />
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f0f0f0',
        flex:1
    }
})
