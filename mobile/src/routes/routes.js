import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Aqui é importado todas as rotas de navegação necessária, nesse código apenas chamei uma tela
import Login from "../pages/Login/index";
import Home from "../pages/Home/index.js";
const Stack = createStackNavigator();

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
          component={Home}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
