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
    {
      id: 3,
      name: "Julio",
      idade: "5 Anos",
      raça: "SRD",
      uri:
        "https://www.matilhabrasil.com/wp-content/uploads/2019/08/CAPA-PORQUE-VIRA-LATA-10-MOTIVOS-PARA-TER-UM-EM-SUA-VIDA.jpg",
    },
    {
      id: 3,
      name: "Tadeu",
      idade: "3 Anos",
      raça: "SRD",
      uri:
        "data:image/jpeg;base64,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",
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
