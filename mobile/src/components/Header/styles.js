import styled from "styled-components/native";
import colors from "../../utils/colors";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
export const Container = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 0px;
  margin-left: 0px;
  flex-direction: column;
  width: ${widthPercentageToDP("100%")};
  height: ${heightPercentageToDP("10%")};
  background: ${colors.primary};
  z-index: 2;
`;

export const ButtonMenu = styled.TouchableWithoutFeedback`
  justify-content: center;
  align-items: center;
  position: relative;
`;
