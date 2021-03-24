import React from "react";
import { Container, ContainerOut, ContainerPes } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Dimensions, PixelRatio, Platform,View,TextInput,Image, Keyboard } from "react-native";
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

export default function Header() {
  return (
    <Container
    sbehavior={Platform.OS === "ios" ? "padding" : ""} enabled
   
      style={{
        width: widthPercentageToDP("100%"),
        height: heightPercentageToDP("150%"),
      }}
    >
      <ContainerOut>
        <Icon
          style={{ left: 20, top: 15, position: "absolute" }}
          style={{ left: 12, top: 5, position: "absolute" }}
          name="reorder-three-outline"
          color="white"
          size={40}
        />
      </ContainerOut>
      {/*  CODIGO DO PESQUISAR ALGO DESABILITADO|COMENTADO ESSE CÓDIGO SERÁ MEXIDO EM ALGUMA ISSUE ABERTA| 
    
      {/* <ContainerPes >
        <TextInput style={{borderColor:"red",width:250,left:20,height:40,backgroundColor:"#999",top:20,borderRadius:8}}
         placeholderTextColor="#fff"
          placeholder="  Pesquisar por ..."
          keyboardShouldPersistTaps
        
        />
       <Icon
          style={{ left: 269, top: 25, position: "absolute",backgroundColor:"#fff",borderRadius:8}}
          name="search-outline"
          size={25}
          
        />
      </ContainerPes> */}
    </Container>
  );
}

//style={{ left: 100, top: 20, position: "absolute" }}