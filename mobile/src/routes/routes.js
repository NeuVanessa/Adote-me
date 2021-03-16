//Para utilizar o react-navigation primeiro chamei o create app responsável por ficar em volta na verdade é o container de fora que receberá outro dentro.
import { createAppContainer, createSwitchNavigator } from "react-navigation";

//Aqui é importado todas as rotas de navegação necessária, nesse código apenas chamei uma tela

import Login from "../pages/Login/index";
import Home from "../pages/Home/index";
// aqui foi criado a constante Routes no createSwitchNavigator eu iniciei minha primeira rota que é a Initial
const Routes = createAppContainer(
  createSwitchNavigator({
    // Primeira rota definida no projeto, essa rota é a primeira visualizada pelo usuário do aplicativo.
    Inicio: {
      screen: Login,
    },
    Entrada: {
      screen: Home,
    },
  })
);

//Aqui só foi exportado
export default Routes;
