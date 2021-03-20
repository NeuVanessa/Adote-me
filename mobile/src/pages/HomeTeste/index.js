import React from 'react';
import {Container,ContainerHeader,ContainerMain,ConitanerRecent} from './styles';
import Header from '../../components/Header';
import {Text}from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function HomeTeste() {
    
    return (
<Container>
<Header/>
<ContainerHeader  style={{    height: wp('150%') }} >
</ContainerHeader>

<ContainerMain>


</ContainerMain>
<ConitanerRecent>


</ConitanerRecent>

</Container>

    );
}