import React from "react";
import { ScrollView, Text, SafeAreaView, Image } from "react-native";
import { Container, Card, Img, CardText, ContainerImg } from "./styles";

export default function CreateRecent() {

       
  const array = [
    {
      name: "Maicon",
      idade: "1 Mês",
      raça: "Pitbull",
      uri:
        "https://conteudo.movidesk.com/wp-content/uploads/2019/03/Post-FAQ.jpg",
    },
    {
      name: "Julio",
      idade: "5 Anos",
      raça: "SRD",
      uri:
        "https://conteudo.movidesk.com/wp-content/uploads/2019/03/Post-FAQ.jpg",
    },
    {
      name: "Tadeu",
      idade: "3 Anos",
      raça: "SRD",
      uri:
        "https://conteudo.movidesk.com/wp-content/uploads/2019/03/Post-FAQ.jpg",
    },
    {
      name: "Tadeu",
      idade: "3 Anos",
      raça: "SRD",
      uri:
        "https://conteudo.movidesk.com/wp-content/uploads/2019/03/Post-FAQ.jpg",
    },
    {
      name: "Tadeu",
      idade: "3 Anos",
      raça: "SRD",
      uri:
        "https://conteudo.movidesk.com/wp-content/uploads/2019/03/Post-FAQ.jpg",
    },
    {
      name: "Tadeu",
      idade: "3 Anos",
      raça: "SRD",
      uri:
        "https://conteudo.movidesk.com/wp-content/uploads/2019/03/Post-FAQ.jpg",
    },
    {
      name: "Tadeu",
      idade: "3 Anos",
      raça: "SRD",
      uri:
        "https://conteudo.movidesk.com/wp-content/uploads/2019/03/Post-FAQ.jpg",
    },
    {
      name: "Tadeu",
      idade: "3 Anos",
      raça: "SRD",
      uri:
        "https://conteudo.movidesk.com/wp-content/uploads/2019/03/Post-FAQ.jpg",
    },
    {
      name: "Tadeu",
      idade: "3 Anos",
      raça: "SRD",
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    },
  ];
  return (
    <Container>
      <SafeAreaView>
        <ScrollView horizontal={true}>
          {array.map((card) => {
            return (
              <Card>
                <Image style={{width:180,height:180,backgroundColor:"red"}} source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}/>

                <CardText>
                  <Text>{card.name} </Text>
                  <Text>{card.idade} </Text>
                  <Text>{card.raça} </Text>
                </CardText>
            
                
              </Card>
              
            );
            
          })}

          
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}
