import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '@shared/components/header';
import {
  Container,
  Title,
  Subtitle,
  LinkContent,
} from '@modules/pages/404/404.styles';

const Custom404: NextPage = () => (
  <>
    <Header />
    <Container>
      <Title>Oops!</Title>
      <Subtitle>Página não encontrada =(</Subtitle>
      <Link href="/">
        <LinkContent>voltar para home</LinkContent>
      </Link>
    </Container>
  </>
);

export default Custom404;
