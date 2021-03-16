import React, { Component } from "react";
import {
  SimpleInput,
  Input,
  ButtonLogin,
  ButtonText,
  ButtonGmail,
  ButonRegister,
  TextFooter,
} from "./styles";

//import Icon from "react-native-vector-icons/FontAwesome";
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
        >
          <ButtonText color="#fff">Continue with Google</ButtonText>
        </ButtonGmail>
        <ButonRegister
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <ButtonText color="#fff">Cadastrar</ButtonText>
        </ButonRegister>

        <TextFooter color="#fff">Copyright © 2021 Equipe Adote-me.</TextFooter>
      </SimpleInput>
    );
  }
}
export default Inputs;
