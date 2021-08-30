import React from 'react'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import { w, h } from "react-native-responsiveness";

export const WelcomeTextinput = (props) => {
    return (
        <View style={styles.container} >
            <View style={styles.iconcontainer} >
                <Image source = {props.src} style={styles.imgstyle} />
            </View>
            <TextInput placeholder = {props.plcholder} style={styles.inputstyle} />
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        width: w('90%'),
        height: h('7%'),
        overflow: 'hidden',
        borderRadius: h('1%'),
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop:h('2%')
    },
    inputstyle:{
        // backgroundColor:'blue',
        width: '80%',
        height: h('7%'),
        paddingLeft: h('1%')
    },
    iconcontainer:{
        width: '20%',
        height: h('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: h('0.1%')
    },
    imgstyle:{
        width: '80%',
        height: h('3%'),
        // backgroundColor: 'gold',
        resizeMode:'contain',
    }
})
