import styled from "styled-components/native";
import colors from "../../../utils/colors";
export const Container = styled.View`
  flex: 1;
  background-color:${colors.secudary};
  padding-top: 40;
`;

export const Card = styled.View`
  flex: 1;
  padding-top: -0px;
  background-color: ${colors.secudary};
`;

export const CardText = styled.View`
  margin-top: 2px;
  width:400px;
  padding: 25px;
  font-size: 10px;
  left: 122px;
  background-color:${colors.white};
`;
