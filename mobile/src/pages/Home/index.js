import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text } from "react-native";
import { Container } from "./styles";
export default function Home() {
  return (
    <Container>
      <Text> Sou a Home</Text>
    </Container>
  );
}
