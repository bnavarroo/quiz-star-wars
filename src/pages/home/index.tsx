import type { NextPage } from 'next';
import Link from 'next/link';
import {
  Container,
  Wrapper,
  Title,
  Subtitle,
  Logo,
  Button,
  Rules,
} from './home.styles';

const Home: NextPage = () => (
  <Container>
    <Wrapper>
      <Logo />
      <Title>StarQuiz</Title>
      <Subtitle>
        Teste seus conhecimentos e prove que você é mestre (ou não né rsrs)
        quando o assunto é StarWars!
      </Subtitle>
      <Rules>
        <b>Instruções:</b> <br />
        <br />
        - Você terá dois minutos para acertar o maior número de personagens;
        <br />
        <br />
        - Para cada acerto sem ajuda você recebe 10 pontos. Quando a ajuda é
        acionada o valor da pontuação cai para 5 pontos;
        <br />
        <br />- A resposta pode ser enviada quantas vezes você quiser, porém o
        que vai contar é sempre a última resposta enviada antes do término do
        tempo.
      </Rules>
      <Link href="/game">
        <Button>Iniciar o Quiz</Button>
      </Link>
    </Wrapper>
  </Container>
);

export default Home;
