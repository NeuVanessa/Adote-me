import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text } from "react-native";
import { Container, Image,SectionInput } from "./styles";
import Inputs from '../../components/Input';
import Logo from "../../assets/logo.png";
import { Platform, Dimensions, PixelRatio} from 'react-native';
export default function Login() {
  return (
    <Container sbehavior={Platform.OS === "ios" ? "padding" : ""} enabled >
      <Image source={Logo} />
      <SectionInput>
      <Inputs />
      </SectionInput>
    </Container>
  );
}
