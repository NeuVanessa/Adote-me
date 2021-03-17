import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { Container, ButtonMenu } from "./styles";

export default function Header() {
  const navigation = useNavigation();
  return (
    <Container>
      <ButtonMenu onPress={() => signOut()}>
        <Icon
          style={{ left: 12, top: 25 }}
          name="reorder-three-outline"
          color="white"
          size={50}
        />
      </ButtonMenu>
      <Icon
        name="search-outline"
        style={{
          color: "white",
          position: "relative",
          fontSize: 35,
          bottom: 150,
          left: 470,
          top: -20,
        }}
        onPress={{}}
      />
    </Container>
  );
}
