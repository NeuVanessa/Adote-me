import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Container, ContainerOut, ContainerPes } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Dimensions, PixelRatio, Platform } from "react-native";

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

/**
 * Wrapper function that removes orientation change listener and should be invoked in
 * componentWillUnmount lifecycle method of every class component (UI screen) that
 * listenOrientationChange function has been invoked. This should be done in order to
 * avoid adding new listeners every time the same component is re-mounted.
 */
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
 
  const navigation = useNavigation();

  return (
    <Container
      sbehavior={Platform.OS === "ios" ? "padding" : ""}
      enabled
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

      <ContainerPes>
        <Icon
          style={{ left: 200, top: 20, position: "absolute" }}
          name="search-outline"
          size={18}
        />
      </ContainerPes>
    </Container>
  );
}
