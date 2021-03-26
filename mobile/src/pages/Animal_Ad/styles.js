import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerForm = styled.View`
  position: relative;
  background-color: #fff;
  padding: 30px;
`;

export const ClearButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 15px;
  background-color: #b58473;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const ClearButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: monospace;
  font-weight: bold;
`;

export const InputBox = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const LabelInput = styled.Text`
  font-size: 20px;
  color: #b58473;
  font-weight: bold;
  margin-bottom: 12px;
  font-family: monospace;
`;

export const Input = styled.TextInput`
  width: 100%;
  background-color: #efefef;
  border-radius: 8px;
  height: 48px;
  padding-left: 20px;
  color: #b58473;
  font-size: 21px;
  font-family: monospace;
`;

export const UploadImageButton = styled.TouchableOpacity`
  width: 100%;
  height: 200px;
  border: 2px solid #b58473;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: #34a853;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const PlusIcon = styled.View`
  position: absolute;
  left: 10px;
  width: 60px;
  height: 40px;
  background-color: #fff;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const TextSimple = styled.Text`
  color: #b58473;
  font-weight: bold;
  font-family: monospace;
`;
