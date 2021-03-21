import React from 'react';
import {Container,ContainerBody,ContainerMain,ConitanerRecent,ContainerButton} from './styles';
import Header from '../../components/Header';
import {Text}from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import CreateRecent from "./CreateRecent";
export default function Home() {
    
    return (
<Container>
<Header/>
<ContainerBody>
<Text style={{left:16,fontSize:15,top:10,color:"#fff"}}>Adicionados Recentimente</Text>
<ContainerMain>

<CreateRecent/>
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