import React from "react";
import { Container, ContainerOut, ContainerPes, TitleText, InputSearch } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Dimensions, PixelRatio, Platform, Text,TextInput,Image, Keyboard } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// Retrieve initial screen's width
let screenWidth = Dimensions.get("window").width;

// Retrieve initial screen's height
let screenHeight = Dimensions.get("window").height;

const widthPercentageToDP = (widthPercent) => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);

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

export {
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener,
};

export default function Header({ title, search }) {
  
  return (
    <Container
    sbehavior={Platform.OS === "ios" ? "padding" : ""} enabled
      // retirado porque ocupa a tela toda, ai limitei a altura no styles.js
      // style={{
      //   width: widthPercentageToDP("100%"),
      //   height: heightPercentageToDP("150%"),
      // }} 
    >
      <ContainerOut>
        <Icon
          // style={{ position: 'absolute', left: 10 }}
          name="reorder-three-outline"
          color="white"
          size={40}
        />
      </ContainerOut>
       {/* CODIGO DO PESQUISAR ALGO DESABILITADO|COMENTADO ESSE CÓDIGO SERÁ MEXIDO EM ALGUMA ISSUE ABERTA|  */}

       {title && (
         <TitleText>{title}</TitleText>
       )}

       {search && (
         <ContainerPes >
            <InputSearch
              placeholderTextColor="#fff"
              placeholder="Pesquisar por ..."
              keyboardShouldPersistTaps
            />
            <Icon
              style={{ right: 0, top: 0, position: "absolute",backgroundColor:"#fff",borderRadius:8}}
              name="search-outline"
              size={30}
            />
          </ContainerPes>
       )}
    
    </Container>
  );
}

//style={{ left: 100, top: 20, position: "absolute" }}