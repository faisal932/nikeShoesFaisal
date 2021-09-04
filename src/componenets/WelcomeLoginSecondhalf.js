import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WelcomeButton, WelcomeIconTxtButton, WelcomeTextinput } from '.'
import {w,h} from 'react-native-responsiveness';
export const WelcomeLoginSecondhalf = () => {
    const [SignUpVisiblity, setvisiviltySignUp]  = React.useState(false);
  
    return (
        <View>
            {
                SignUpVisiblity ? (<>
                <View style={styles.txtcontainer} >
                     <TouchableOpacity >
                     <Text style={styles.firstcontaier} >Sign Up</Text>
                     </TouchableOpacity>
                     <TouchableOpacity >
                     <Text style={styles.secondcontaier} onPress = {() => setvisiviltySignUp(false)} >Login</Text>
                     </TouchableOpacity>
                 </View>
                 <View style={styles.container} >
                 <WelcomeTextinput plcholder = "User name" src = {require("../assets/usericon.png")}  />
                     <WelcomeTextinput plcholder = "Email Address" src = {require("../assets/email.png")} />
                     <WelcomeTextinput plcholder = "Password" src = {require("../assets/passwordicon.png")} passwordtype = {true} />
                     <WelcomeButton txt="SIGN UP" />
                     <View style={styles.icontxtbtncontainer} >
                         <WelcomeIconTxtButton src={require('../assets/google-symbol.png')} text="Google" />
                         <WelcomeIconTxtButton src={require('../assets/facebook.png')} text="Facebook" />
                     </View>
                  
                 </View>
              </>)
             :(<>
                 <View style={styles.txtcontainer} >
                     <TouchableOpacity onPress = {() => {setvisiviltySignUp(true); }} >
                     <Text style={styles.secondcontaier} >Sign Up</Text>
                     </TouchableOpacity>
                     <TouchableOpacity>
                     <Text style={styles.firstcontaier} >Login</Text>
                     </TouchableOpacity>
                 </View>
                 <View style={styles.container} >
                     <WelcomeTextinput plcholder = "Email Address" src = {require("../assets/email.png")} />
                     <WelcomeTextinput plcholder = "Password" src = {require("../assets/passwordicon.png")} passwordtype = {true} />
                     <WelcomeButton txt="Login" />
                     <View style={styles.icontxtbtncontainer} >
                         <WelcomeIconTxtButton src={require('../assets/google-symbol.png')} text="Google" />
                         <WelcomeIconTxtButton src={require('../assets/facebook.png')} text="Facebook" />
                     </View>
                  
                 </View>
             </>)
            }
           
        </View>      
        
    )
}



const styles = StyleSheet.create({
    txtcontainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    container:{
        backgroundColor: '#faf7f7',
        width: '100%',height:h('60%'),
        paddingTop: h('5%'),
    },
    firstcontaier:{
        backgroundColor:'#faf7f7',
        
        padding: h('2%'),
        paddingLeft:h('5%'),
        paddingRight:h('5%'),
        borderRadius:h('0.5%'),
        borderBottomColor: '#d9d7d7',
        borderBottomWidth: h('0.03%')
    },
    secondcontaier:{
        
        
        padding: h('2%'),
        paddingLeft:h('5%'),
        paddingRight:h('5%'),
        borderRadius:h('0.5%')
    },
    icontxtbtncontainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '90%',
        marginLeft: h('2%'),
    }
})

