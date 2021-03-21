import React from 'react';
import {Container,ContainerBody,ContainerMain,ConitanerRecent,ContainerButton} from './styles';
import Header from '../../components/Header';
import {Text}from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Home() {
    
    return (
<Container>
<Header/>
<ContainerBody>
    
<ContainerMain>

<Text>
ESSE CONTAINER É PARA TRABALHAR COM OS ADICIONADOS RECENTIMENTE

</Text>

</ContainerMain>

<ConitanerRecent>
<Text style={{color:"#fff"}}>
ESSE CONTAINER É PARA TRABALHAR COM as OUTRAS POSTAGENS 
</Text>

</ConitanerRecent>

<ContainerButton>

    <Text> ESTE CONTAINER É PARA TRABALHAR COM O BOTÃO CRIAR ANUNCIO! Xd</Text>
</ContainerButton>
</ContainerBody>
</Container>

    );
}