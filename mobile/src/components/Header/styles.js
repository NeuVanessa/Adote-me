import styled from "styled-components/native";
import colors from "../../utils/colors";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
export const Container = styled.View`
  top: 22px;

  flex: 1;
  flex-direction: row;
  background: ${colors.primary};
`;

export const ContainerOut = styled.View`
  flex: 1;
  flex-grow: 8px;
  top: 0px;
`;

export const ContainerPes = styled.View`
  flex: 1;
  flex-grow: 30px;
  top:0px;
  
`;
export const Input = styled.TouchableOpacity`
  flex: 1;
  flex-grow: 30px;

  top:0px;
  
`;


