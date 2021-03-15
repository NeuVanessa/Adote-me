import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {SimpleInput} from './styles';

class Inputs extends Component {
//    state = {
//       email: '',
//       password: ''
//    }
//    handleEmail = (text) => {
//       this.setState({ email: text })
//    }
//    handlePassword = (text) => {
//       this.setState({ password: text })
//    }
//    login = (email, pass) => {
//       alert('email: ' + email + ' password: ' + pass)
//    }
   render() {
      return (
         <SimpleInput style = {styles.container}>
            <Input 
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <Input 
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </SimpleInput>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({

   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})