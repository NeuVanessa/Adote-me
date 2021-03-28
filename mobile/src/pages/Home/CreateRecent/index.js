import React from "react";
import { ScrollView, Text, SafeAreaView, Image } from "react-native";
import { Container, Card, CardText } from "./styles";

export default function CreateRecent() {
  const array = [
    {
      id: 1,
      name: "Maicon",
      idade: "1 Mês",
      raça: "Pitbull",
      uri: "https://zipanuncios.com.br/img/2545938/1559956501225861.jpeg",
    },
    {
      id: 2,
      name: "Julio",
      idade: "5 Anos",
      raça: "SRD",
      uri:
        "https://www.matilhabrasil.com/wp-content/uploads/2019/08/CAPA-PORQUE-VIRA-LATA-10-MOTIVOS-PARA-TER-UM-EM-SUA-VIDA.jpg",
    },
  ];
  return (
    <Container>
      <SafeAreaView>
        <ScrollView horizontal={true}>
          {array.map((card) => {
            return (
              <Card key={card.id}>
                <Image
                  style={{ width: 180, height: 180, backgroundColor: "red" }}
                  source={{
                    uri: card.uri,
                  }}
                />

                <CardText>
                  <Text style={{ color: "#723D2B", fontFamily: "monospace",fontSize:10}}>
                    {card.name}{" "}
                  </Text>
                  <Text style={{ color: "#723D2B", fontFamily: "monospace",fontSize:10}}>
                    {card.idade}{" "}
                  </Text>
                  <Text style={{ color: "#723D2B", fontFamily: "monospace",fontSize:10 }}>
                    {card.raça}{" "}
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
