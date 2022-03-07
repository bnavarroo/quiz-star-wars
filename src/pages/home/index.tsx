import { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import PageLoader from '@shared/components/page-loader';
import showPageLoader from '@modules/pages/home/home.helpers';
import * as Styled from '@modules/pages/home/home.styles';

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Logo />
        <Styled.Title>StarQuiz</Styled.Title>
        <Styled.Subtitle>
          Teste seus conhecimentos e prove que você é mestre (ou não né rsrs)
          quando o assunto é StarWars!
        </Styled.Subtitle>
        <Styled.Rules>
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
        </Styled.Rules>
        <Link href="/game">
          <Styled.Button onClick={showPageLoader(setLoading)}>
            Iniciar o Quiz
          </Styled.Button>
        </Link>
        <PageLoader isVisible={loading} />
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Home;
