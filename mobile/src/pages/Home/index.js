import React from "react";
import {
  Container,
  ContainerBody,
  ContainerMain,
  ConitanerRecent,
  ContainerButton,
  SubmitButton,
  PlusIcon,
  TextSimple,
} from "./styles";
import Header from "../../components/Header";
import { Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import CreateRecent from "./CreateRecent";
export default function Home() {
  return (
    <Container>
      <Header search />

      <ContainerBody>
        <Text
          style={{
            left: 16,
            fontSize: 15,
            top: 10,
            color: "#fff",
            fontFamily: "monospace",
          }}
        >
          Adicionados Recentimente
        </Text>
        <ContainerMain>
          <CreateRecent />
        </ContainerMain>

        <ConitanerRecent>
          <Text style={{ color: "#fff" }}>
            ESSE CONTAINER É PARA TRABALHAR COM as OUTRAS POSTAGENS
          </Text>
        </ConitanerRecent>

        <ContainerButton>
          <SubmitButton>
            <PlusIcon>
              <Text style={{ fontSize: 25, color: "#723D2B", bottom: 2 }}>
                +
              </Text>
            </PlusIcon>
            <TextSimple style={{ fontSize: 13, color: "#723D2B", left: 10 }}>
              Criar anúncio
            </TextSimple>
          </SubmitButton>
        </ContainerButton>
      </ContainerBody>
    </Container>
  );
}
