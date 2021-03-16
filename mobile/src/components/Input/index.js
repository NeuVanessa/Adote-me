import React, { Component,useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Value } from "react-native-reanimated";
import {
  SimpleInput,
  Input,
  ButtonLogin,
  ButtonText,
  ButtonGmail,
  ButonRegister,
  TextFooter,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
//import Icon from "react-native-vector-icons/FontAwesome";

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState(null)
  const [Password, setPassord] = useState(null)
  
  const acessoHome = () => {

    console.log("Acessou o home")
  }
 
  return (

  
    <SimpleInput>
       
      <Input
        underlineColorAndroid="transparent"
        placeholder="Username"
        placeholderTextColor="#723D2B"
        autoCapitalize="none"
        onChangText={Value => setUsername(Value)}
      
      />

      <Input
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="#723D2B"
        autoCapitalize="none"
        onChangText={Value => setPassord(Value)}
      />

      <ButtonLogin onPress={()=>acessoHome()}>
        <ButtonText color="#fff">Logar</ButtonText>
      </ButtonLogin>
      <ButtonGmail
      
      >
        <ButtonText color="#fff">Continue with Google</ButtonText>
      </ButtonGmail>
      <ButonRegister
    
      >
        <ButtonText color="#fff">Cadastrar</ButtonText>
      </ButonRegister>

      <TextFooter color="#fff">Copyright © 2021 Equipe Adote-me.</TextFooter>
    
    </SimpleInput>
  );
}
