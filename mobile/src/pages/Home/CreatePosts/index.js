import React, { useState } from "react";
import { ScrollView, Text, SafeAreaView, Image } from "react-native";
import { Container, Card, CardText } from "./styles";

export default function CreateRecent() {
  const [array,setArray] = useState([
    {
      id: 1,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 2,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 7,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 4,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 5,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 6,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 6,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 6,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 6,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 6,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 6,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 6,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 6,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 6,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 6,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 6,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    {
      id: 6,
      category: "LABRADOR",
      idade: "1 Mês",
      raça: "Pitbull",
      name: "jose",
      description: "Atendido por José gosta de fica no sofá.",
      datePublication: "13 Marco 16:54, Paralela",
      uri:
        "https://www.gazetadigital.com.br/uploads/webdisco/2017/02/17/jpg/original/350205d21d6f464f1c5a4fb8e47807a2.jpg",
    },
    
  ]);
  return (
    <Container>
      <Text
        style={{
          position: "absolute",
          fontFamily: "monospace",
          left: 10,
          top: 10,
          color: "#fff",
        }}
      >
        MAIS OPÇÃO PARA ADOÇÃO
      </Text>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={true}>
          {array.map((card) => {
            return (
              <Card key={card.id}>
                <Image
                  style={{
                    width: 120,
                    height: 140,
                    top: 0,
                    left:10,
                    position: "absolute",
                  }}
                  source={{
                    uri: card.uri,
                  }}
                />

                <CardText>
                  <Text
                    style={{
                      color: "#723D2B",
                      fontFamily: "monospace",
                      fontSize: 10,
                    }}
                  >
                    {card.category}{" "}
                  </Text>
                  <Text
                    style={{
                      color: "#723D2B",
                      fontFamily: "monospace",
                      fontSize: 10,
                    }}
                  >
                    {card.idade}{" "}
                  </Text>
                  <Text
                    style={{
                      color: "#723D2B",
                      fontFamily: "monospace",
                      fontSize: 10,
                    }}
                  >
                    {card.name}{" "}
                  </Text>
                  <Text
                    style={{
                      color: "#723D2B",
                      fontFamily: "monospace",
                      fontSize: 10,
                    }}
                  >
                    {card.description}{" "}
                  </Text>
                  <Text
                    style={{
                      color: "#723D2B",
                      fontFamily: "monospace",
                      fontSize: 10,
                    }}
                  >
                    {card.datePublication}{" "}
                  </Text>
                </CardText>
              </Card>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}
