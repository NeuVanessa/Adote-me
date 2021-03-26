import styled from "styled-components/native";
import colors from "../../../utils/colors";
export const Container = styled.View`
  top: 20px;
  flex: 1;
  flex-direction: row;
  background-color: ${colors.secudary};
  flex-grow:40px;

`;

export const Card = styled.View`
  flex: 1;
  top: 45px;
  margin-left: 8px;
  width: 539px;
  margin:5px;
  height: 150px;
  background-color:${colors.white};

`;

export const CardText = styled.View`
  flex: 1;
  top:10px;
  margin-left: 150px;
  
`;
