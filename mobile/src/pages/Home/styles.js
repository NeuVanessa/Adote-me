import styled from "styled-components/native";
import colors from "../../utils/colors";

export const Container = styled.View`
  flex: 1;
`;

//1
export const ContainerBody = styled.View`
  position: relative;
  flex-grow: 8;
  background-color: ${colors.secudary};
`;

//2
export const ContainerMain = styled.View`
  flex-grow: 20;
`;

//Container Do poster
export const ConitanerPosts = styled.View`
  flex-grow: 30;

`;



export const ContainerButton = styled.View`
  flex-grow: 5;
  flex-direction: row;
  background-color: ${colors.primary};
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 40%;
  height: 40px;
  background-color: ${colors.suport};
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 40px;
  margin-left: 160px;
`;

export const TextSimple = styled.Text`
  color: #b58473;
  font-weight: bold;
  font-family: monospace;
`;

export const PlusIcon = styled.View`
  position: absolute;
  left: 15px;
  width: 27px;
  height: 27px;
  background-color: #fff;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

