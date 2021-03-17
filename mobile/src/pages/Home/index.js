import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text } from "react-native";
import { Container } from "./styles";
import Header from '../../components/Header';
export default function Home() {
  return (
    <Container>
      <Header/>
    </Container>
  );
}
