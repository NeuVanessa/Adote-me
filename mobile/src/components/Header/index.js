import React from "react";
import { Container, ContainerOut, ContainerPes } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

export default function Header() {
  return (
    <Container sbehavior={Platform.OS === "ios" ? "padding" : ""} enabled>
      <ContainerOut>
        <Icon
          style={{ left: 20, top:15, position: "absolute" }}
          name="reorder-three-outline"
          color="white"
          size={30}
        />
        
      </ContainerOut>

      <ContainerPes>
        <Icon
          style={{ left: 200, top:20, position: "absolute" }}
          name="search-outline"
          size={18}
        />
      </ContainerPes>
    </Container>
  );
}
