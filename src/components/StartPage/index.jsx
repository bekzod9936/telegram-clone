import React from 'react'
import { Container, Div}  from "./style";
import MainPicture from '../../assets/images/startpage.png';
import ContainerM from '@material-ui/core/Container';
const Index = () => {
  return (
    <Container>
      <Div.Img src={MainPicture} alt='main' />
      <ContainerM maxWidth='sm' >
        <Div.Content>
          <Div.Header>Telegram Website</Div.Header>
          <Div.Info>Welcome to the official Telegram Website app.</Div.Info>
          <Div.Info>It's fast and secure.</Div.Info>
          <Div.Button>START MESSAGING</Div.Button>
        </Div.Content>
      </ContainerM>
    </Container>
  )
}

export default Index
