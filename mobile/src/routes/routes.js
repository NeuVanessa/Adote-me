import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
//Aqui é importado todas as rotas de navegação necessária, nesse código apenas chamei uma tela
import Login from "../pages/Login";
import Home from "../pages/Home";
import Faqs from "../pages/Faqs";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavs() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="FAQS" component={Faqs} />
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
