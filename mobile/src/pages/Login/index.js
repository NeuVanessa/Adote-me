import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text } from "react-native";
import { Container, Image,SectionInput,SectionInputs } from "./styles";
import Inputs from '../../components/Input';
//import Logo from "../../assets/logo.png";
import LogoGif from "../../assets/logogif.gif"
import { Platform, Dimensions, PixelRatio} from 'react-native';


export default function Login() {
  return (
    <Container sbehavior={Platform.OS === "ios" ? "padding" : ""} enabled>
   
      <SectionInput>
      <Image source={LogoGif} />
      <Text style={{fontSize:20,position:"absolute",left:360,bottom:40,fontFamily: 'monospace',color:"#fff"}}>Adote-me</Text>
      </SectionInput>

      <SectionInputs>
        <Inputs />
      </SectionInputs>
      
    </Container>
  );
}
