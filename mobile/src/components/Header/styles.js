import styled from "styled-components/native";
import colors from "../../utils/colors";

import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

export const Container = styled.View`
  margin-top: 7.5%;
  width: 100%;
  height: 60px;
  
  background: ${colors.primary};
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TitleText = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  font-family: monospace;
`;

export const ContainerOut = styled.View`
  position: absolute;
  left: 15px;
`;

export const ContainerPes = styled.View`
  width: 60%;
  align-self: flex-end;
  margin-right: 30px;
`;

export const InputSearch = styled.TextInput`
  border: 1px solid #fff;
  height: 32px;
  padding-left: 15px;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
`;

export const Input = styled.TouchableOpacity`
  flex: 1;
`;


