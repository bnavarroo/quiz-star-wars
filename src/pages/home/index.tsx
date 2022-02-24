import type { NextPage } from 'next';
import Link from 'next/link';
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
          Teste seus conhecimentos e prove que você é mestre (ou não né rsrs)
          quando o assunto é StarWars!
        </Subtitle>
        <Link href="/game">
          <Button>Iniciar o Quiz</Button>
        </Link>
      </Wrapper>
    </Container>
  </BasicTemplate>
);

export default Home;
