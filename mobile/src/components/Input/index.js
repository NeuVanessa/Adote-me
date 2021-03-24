import React from "react";

import {
  SimpleInput,
  Input,
  ButtonLogin,
  ButtonText,
  ButtonGmail,
  ButonRegister,
  TextFooter,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
//import Icon from "react-native-vector-icons/FontAwesome";
import { Platform, Dimensions, PixelRatio } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function Inputs() {
  const navigation = useNavigation();
  // Retrieve initial screen's width
  let screenWidth = Dimensions.get("window").width;

  // Retrieve initial screen's height
  let screenHeight = Dimensions.get("window").height;

  const widthPercentageToDP = (widthPercent) => {
    // Parse string percentage input and convert it to number.
    const elemWidth =
      typeof widthPercent === "number"
        ? widthPercent
        : parseFloat(widthPercent);

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
  };

  const heightPercentageToDP = (heightPercent) => {
    // Parse string percentage input and convert it to number.
    const elemHeight =
      typeof heightPercent === "number"
        ? heightPercent
        : parseFloat(heightPercent);

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
  };

  const listenOrientationChange = (that) => {
    Dimensions.addEventListener("change", (newDimensions) => {
      // Retrieve and save new dimensions
      screenWidth = newDimensions.window.width;
      screenHeight = newDimensions.window.height;

      // Trigger screen's rerender with a state update of the orientation variable
      that.setState({
        orientation: screenWidth < screenHeight ? "portrait" : "landscape",
      });
    });
  };

  const removeOrientationListener = () => {
    Dimensions.removeEventListener("change", () => {});
  };

  const acessoHome = () => {
    navigation.navigate("Home");
  };

  const irTeste = () => {
    navigation.navigate("Outher");
  };

  return (
    <SimpleInput sbehavior={Platform.OS === "ios" ? "padding" : ""} enabled>
      <Input
        style={{ width: widthPercentageToDP("93%") }}
        underlineColorAndroid="transparent"
        placeholder="Username"
        placeholderTextColor="#723D2B"
        autoCapitalize="none"
        onChangText={(Value) => setUsername(Value)}
      />

      <Input
        style={{ width: widthPercentageToDP("93%") }}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="#723D2B"
        autoCapitalize="none"
        onChangText={(Value) => setPassord(Value)}
      />

      <ButtonLogin
        style={{ width: widthPercentageToDP("93%") }}
        onPress={() => acessoHome()}
      >
        <ButtonText color="#fff">Logar</ButtonText>
      </ButtonLogin>
      <ButtonGmail style={{ width: widthPercentageToDP("93%") }}>
        <ButtonText onPress={() => acessoHome()} color="#fff">
          Continue with Google
        </ButtonText>
      </ButtonGmail>
      <ButonRegister style={{ width: widthPercentageToDP("93%") }}>
        <ButtonText color="#fff">Cadastrar</ButtonText>
      </ButonRegister>

      <TextFooter color="#fff">Copyright © 2021 Equipe Adote-me.</TextFooter>
    </SimpleInput>
  );
}
