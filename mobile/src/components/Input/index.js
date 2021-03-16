import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { SimpleInput, Input, ButtonLogin, ButtonText,ButtonGmail,ButonRegister } from "./styles";

import Icon from "react-native-vector-icons/FontAwesome";
class Inputs extends Component {
  render() {
    return (
      <SimpleInput>
        <Input
          underlineColorAndroid="transparent"
          placeholder="Username"
          placeholderTextColor="#723D2B"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />

        <Input
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#723D2B"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />

        <ButtonLogin
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <ButtonText color="#fff">Logar</ButtonText>
        </ButtonLogin>
        <ButtonGmail
          onPress={() => this.login(this.state.email, this.state.password)}
          icon="camera"
        >
            
          <ButtonText color="#fff">Continue with Google</ButtonText>
        </ButtonGmail>
        
          {/* <Icon name='heart' size={30} color='white'/> */}
        <ButonRegister
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </ButonRegister>
      </SimpleInput>
    );
  }
}
export default Inputs;
