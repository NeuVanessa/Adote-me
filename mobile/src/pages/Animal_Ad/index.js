import React, { useState } from 'react'
import { Image, ScrollView } from 'react-native'
import Header from '../../components/Header';
import {
  ClearButton,
  ClearButtonText,
  Container,
  ContainerForm,
  InputBox,
  LabelInput,
  Input,
  UploadImageButton,
  SubmitButton,
  PlusIcon,
  TextSimple
} from './styles';

import UploadImage from '../../assets/upload-photo.png'

export default function Animal_Ad() {

  // valores dos inputs
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [cep, setCep] = useState('')

  function clearInputs() {
    setTitle('')
    setDescription('')
    setCategory('')
    setCep('')
  }

  return (
    <Container>
      <Header title="Inserir Anuncio de Animalzinho" />

      <ScrollView>

        <ContainerForm>

          <ClearButton onPress={clearInputs}>
            <ClearButtonText>Limpar campos</ClearButtonText>
          </ClearButton>

          <InputBox>
            <LabelInput>Título*</LabelInput>
            <Input placeholder="Ex: Disponivel para adoção" value={title} onChangeText={value => setTitle(value)} />
          </InputBox>

          <InputBox>
            <LabelInput>Descrição*</LabelInput>
            <Input
              placeholder="Ex: Doa-se Um Labrador 5 Anos"
              value={description} onChangeText={value => setDescription(value)}
            />
          </InputBox>

          <InputBox>
            <LabelInput>Categoria*</LabelInput>
            <Input placeholder="Ex: Labrador" value={category} onChangeText={value => setCategory(value)} />
          </InputBox>

          <InputBox>
            <LabelInput>CEP*</LabelInput>
            <Input value={cep} onChangeText={value => setCep(value)} />
          </InputBox>
          
          <UploadImageButton>
            <Image style={{ marginBottom: 10 }} source={UploadImage} />
            <TextSimple style={{ fontSize: 18 }}>Inserir imagem</TextSimple>
            <TextSimple style={{ fontSize: 18 }}>(Máximo 4)</TextSimple>
          </UploadImageButton>

          <SubmitButton style={{ marginTop: 20, marginBottom: 20 }}>
            <PlusIcon>
              <TextSimple style={{ fontSize: 40}}>+</TextSimple>
            </PlusIcon>
            <TextSimple style={{ fontSize: 28, color: '#fff' }}>Criar anúncio</TextSimple>
          </SubmitButton>

          <TextSimple style={{ fontSize: 20 }}>Publicando, voce aceita os Termos de Utilização e Privacidade desse aplicativo</TextSimple>

        </ContainerForm>

      </ScrollView>
    </Container>
  )
}