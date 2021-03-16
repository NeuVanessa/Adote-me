import React from "react";

import { View, Text } from "react-native";
import { Container, Image,SectionInput } from "./styles";
import Inputs from '../../components/Input';
import Logo from "../../assets/logo.png";
export default function Login() {
  return (
    <Container>
      <Image source={Logo} />
      <SectionInput>
      <Inputs />
      </SectionInput>
    </Container>
  );
}
