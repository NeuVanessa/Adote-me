import React from "react";
import {Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {View} from 'react-native'
import Login from "../pages/Login";
import Home from "../pages/Home";
import Animal_Ad from "../pages/Animal_Ad";
import Terms_of_Use from '../pages/Terms_of_Use';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavs() {
  return (
    <Drawer.Navigator initialRouteName="Home"
    drawerStyle={{
      backgroundColor: '#c6cbef',
      width: 240,
    }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Animal_Ad" component={Animal_Ad} />
      <Drawer.Screen name="Termos" component={Terms_of_Use} />
    </Drawer.Navigator>
  );
}

//serve para ocultar o header que aparece automático quando cria uma rota
//headerShown
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={DrawerNavs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
