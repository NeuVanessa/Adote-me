import React from "react";
import { ScrollView,Text ,SafeAreaView,Image} from "react-native";
import { Container, Card, Img,CardText } from "./styles";

export default function CreateRecent() {

    const fotoUrl = 'https://instagram.fcgh9-1.fna.fbcdn.net/t51.2885-15/e35/15276770_381074615568085_8052939980646907904_n.jpg?ig_cache_key=MTM5ODY4MDMyNjYyMDA1MDE4OQ%3D%3D.2';

  const array = [
    {
      name: "Maicon",
      idade: "1 Mês",
      raça: "Pitbull",
      img: "https://3.bp.blogspot.com/-bnzlXa1mIe0/WCXcyVh9aNI/AAAAAAAA1_g/xbgbYXeSCLQc7y5gXagH2SZhZW_SAtdzwCLcB/s1600/Novo-Golf-2017%2B%252815%2529.jpg"
    },
    {
      name: "Julio",
      idade: "5 Anos",
      raça: "SRD",
      img: "https://3.bp.blogspot.com/-bnzlXa1mIe0/WCXcyVh9aNI/AAAAAAAA1_g/xbgbYXeSCLQc7y5gXagH2SZhZW_SAtdzwCLcB/s1600/Novo-Golf-2017%2B%252815%2529.jpg"
    },
    {
      name: "Tadeu",
      idade: "3 Anos",
      raça: "SRD",
      img:"Fhttps://3.bp.blogspot.com/-bnzlXa1mIe0/WCXcyVh9aNI/AAAAAAAA1_g/xbgbYXeSCLQc7y5gXagH2SZhZW_SAtdzwCLcB/s1600/Novo-Golf-2017%2B%252815%2529.jpg"
    },
    {
        name: "Tadeu",
        idade: "3 Anos",
        raça: "SRD",
        img: "https://3.bp.blogspot.com/-bnzlXa1mIe0/WCXcyVh9aNI/AAAAAAAA1_g/xbgbYXeSCLQc7y5gXagH2SZhZW_SAtdzwCLcB/s1600/Novo-Golf-2017%2B%252815%2529.jpg"
      },
      {
        name: "Tadeu",
        idade: "3 Anos",
        raça: "SRD",
        img: "https://3.bp.blogspot.com/-bnzlXa1mIe0/WCXcyVh9aNI/AAAAAAAA1_g/xbgbYXeSCLQc7y5gXagH2SZhZW_SAtdzwCLcB/s1600/Novo-Golf-2017%2B%252815%2529.jpg"
      },
      {
        name: "Tadeu",
        idade: "3 Anos",
        raça: "SRD",
        img: "https://3.bp.blogspot.com/-bnzlXa1mIe0/WCXcyVh9aNI/AAAAAAAA1_g/xbgbYXeSCLQc7y5gXagH2SZhZW_SAtdzwCLcB/s1600/Novo-Golf-2017%2B%252815%2529.jpg"
      },
      {
        name: "Tadeu",
        idade: "3 Anos",
        raça: "SRD",
        img: "https://3.bp.blogspot.com/-bnzlXa1mIe0/WCXcyVh9aNI/AAAAAAAA1_g/xbgbYXeSCLQc7y5gXagH2SZhZW_SAtdzwCLcB/s1600/Novo-Golf-2017%2B%252815%2529.jpg"
      },
      {
        name: "Tadeu",
        idade: "3 Anos",
        raça: "SRD",
        img: "https://3.bp.blogspot.com/-bnzlXa1mIe0/WCXcyVh9aNI/AAAAAAAA1_g/xbgbYXeSCLQc7y5gXagH2SZhZW_SAtdzwCLcB/s1600/Novo-Golf-2017%2B%252815%2529.jpg"
      },
      {
        name: "Tadeu",
        idade: "3 Anos",
        raça: "SRD",
        img: "https://3.bp.blogspot.com/-bnzlXa1mIe0/WCXcyVh9aNI/AAAAAAAA1_g/xbgbYXeSCLQc7y5gXagH2SZhZW_SAtdzwCLcB/s1600/Novo-Golf-2017%2B%252815%2529.jpg",
       
      },      
    
  
  ];
  return (
  
    <Container>
<SafeAreaView> 
      <ScrollView horizontal={true}>
        {array.map((card) => {
          return (
            <Card>
               <Img  src={card.img}/>
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