import React from 'react';
import { Text, View, ScrollView } from 'react-native'
import {
  Container, Content, Header
} from './styles'

export default function Terms_of_Use() {

  return (
    <Container>
      <Header>
        <Text style={{ color: '#fff', fontSize: 34, fontFamily: 'monospace' }}>Termo de utilização</Text>
      </Header>

        <View style={{ padding: 30 }}>

        <Text style={{ marginBottom: 20, fontSize: 22, color: '#723D2B', fontWeight: 'bold' }}>
          Fique atento aos termos
        </Text>

        <Content>
        <ScrollView>
          <Text style={{ fontSize: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore recusandae natus, expedita sapiente, aliquid nobis ut ullam dolores quidem repellat est ipsa aut dignissimos nostrum ex nemo rem suscipit!</Text>
          <Text style={{ fontSize: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore recusandae natus, expedita sapiente, aliquid nobis ut ullam dolores quidem repellat est ipsa aut dignissimos nostrum ex nemo rem suscipit!</Text>
          <Text style={{ fontSize: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore recusandae natus, expedita sapiente, aliquid nobis ut ullam dolores quidem repellat est ipsa aut dignissimos nostrum ex nemo rem suscipit!</Text>
          <Text style={{ fontSize: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore recusandae natus, expedita sapiente, aliquid nobis ut ullam dolores quidem repellat est ipsa aut dignissimos nostrum ex nemo rem suscipit!</Text>
          <Text style={{ fontSize: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore recusandae natus, expedita sapiente, aliquid nobis ut ullam dolores quidem repellat est ipsa aut dignissimos nostrum ex nemo rem suscipit!</Text>
          <Text style={{ fontSize: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore recusandae natus, expedita sapiente, aliquid nobis ut ullam dolores quidem repellat est ipsa aut dignissimos nostrum ex nemo rem suscipit!</Text>
          <Text style={{ fontSize: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore recusandae natus, expedita sapiente, aliquid nobis ut ullam dolores quidem repellat est ipsa aut dignissimos nostrum ex nemo rem suscipit!</Text>
          <Text style={{ fontSize: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore recusandae natus, expedita sapiente, aliquid nobis ut ullam dolores quidem repellat est ipsa aut dignissimos nostrum ex nemo rem suscipit!</Text>
          </ScrollView>
        </Content>

      </View>
      
    </Container>
  )
}