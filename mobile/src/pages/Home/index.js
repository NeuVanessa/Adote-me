import React from "react";
import {
  Container,
  ContainerBody,
  ContainerMain,
  ConitanerPosts,
  ContainerButton,
  SubmitButton,
  PlusIcon,
  TextSimple,
} from "./styles";
import Header from "../../components/Header";
import { Text } from "react-native";
import CreateRecent from "./CreateRecent";
import CreatePosts from "./CreatePosts";
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

        <ConitanerPosts>
          <CreatePosts />
        </ConitanerPosts>

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