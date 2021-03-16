import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
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
function click() {
  alert("cliclou");
}

export default function Login() {
  //função para teste do botão, criei essa função simples de clique para ver se o botão realmente estava funcionando.

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

      <ButtonLogin onPress={click}>
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
