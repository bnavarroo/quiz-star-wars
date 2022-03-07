import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '@shared/components/header';
import * as Styled from '@modules/pages/404/404.styles';

const Custom404: NextPage = () => (
  <>
    <Header />
    <Styled.Container>
      <Styled.Title>Oops!</Styled.Title>
      <Styled.Subtitle>Página não encontrada =(</Styled.Subtitle>
      <Link href="/">
        <Styled.LinkContent>voltar para home</Styled.LinkContent>
      </Link>
    </Styled.Container>
  </>
);

export default Custom404;
