import React from 'react';
import type { NextPage } from 'next';
import BasicTemplate from '@templates/basic';
import {
  Container,
  Wrapper,
  Title,
  Subtitle,
  Logo,
  Button,
} from './home.styles';

const Home: NextPage = () => (
  <BasicTemplate>
    <Container>
      <Wrapper>
        <Logo />
        <Title>StarQuiz</Title>
        <Subtitle>
          Teste seus conhecimentos e prove que você é mestre quando o assunto é
          StarWars! (ou não né rsrs)
        </Subtitle>
        <Button $type="primary">Iniciar o Quiz</Button>
      </Wrapper>
    </Container>
  </BasicTemplate>
);

export default Home;
