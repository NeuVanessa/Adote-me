import styled from "styled-components/native";

export const SimpleInput = styled.View`
  padding-top:23;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255,0,0)",
})`
  width: 90%;
  font-size: 17px;
  color: blue;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 10px;
  border: blue;
  position: relative;
`;