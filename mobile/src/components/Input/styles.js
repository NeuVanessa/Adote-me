import styled from "styled-components/native";

export const SimpleInput = styled.View`
  padding-top: 30;
  left: 0px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255,0,0)",
})`
  font-size: 17px;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 10px;
  border: black;
  position: relative;
`;
export const ButtonLogin = styled.TouchableOpacity`
  position: absolute;
  height: 53px;

  border-radius: 8;
  align-items: center;
  justify-content: center;
  background-color: #723d2b;
  top: 220px;
`;

export const ButtonGmail = styled.TouchableOpacity`
  height: 53px;
  position: absolute;
  left: 0px;
  border-radius: 8;
  align-items: center;
  justify-content: center;
  background-color: #723d2b;
  top: 300px;
`;
export const ButonRegister = styled.TouchableOpacity`
  width: 308px;
  height: 53px;
  position: absolute;
  left: 0px;
  border-radius: 8;
  align-items: center;
  justify-content: center;
  background-color: #723d2b;
  top: 380px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.color};
  font-style: italic;
`;
export const TextFooter = styled.Text`
  font-size: 10px;
  top: 240px;
  text-align: center;
  color: ${(props) => props.color};
  font-style: italic;
`;
