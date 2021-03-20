import styled from "styled-components/native";
import colors from "../../utils/colors";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

export const Container = styled.View`
  align-items: flex-start;

  width: ${widthPercentageToDP("180%")};
  height: ${heightPercentageToDP("10%")};
  background: ${colors.primary};
  top:20px;
`;

export const ButtonMenu = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ButonLog = styled.View`
position:absolute;
  margin-left: 380px;
  top:15px;
 
`;
