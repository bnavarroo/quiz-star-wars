import type { NextPage } from 'next';
import Link from 'next/link';
import HeaderTemplate from '@templates/header';
import { Container, Title, Subtitle, LinkContent } from './404.styles';

const Custom404: NextPage = () => (
  <HeaderTemplate>
    <Container>
      <Title>Oops!</Title>
      <Subtitle>Página não encontrada =(</Subtitle>
      <Link href="/">
        <LinkContent>voltar para home</LinkContent>
      </Link>
    </Container>
  </HeaderTemplate>
);

export default Custom404;
