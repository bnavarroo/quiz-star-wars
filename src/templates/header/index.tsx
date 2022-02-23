import Head from '@shared/components/head';
import Header from '@shared/components/header';
import Footer from '@shared/components/footer';
import { TemplateDefaultProps } from '@templates/template.types';
import { Container, Wrapper } from './header.styles';

const HeaderTemplate: React.FC<TemplateDefaultProps> = ({
  children,
  title,
}) => (
  <>
    <Head title={title} />
    <Container>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </Container>
  </>
);

HeaderTemplate.defaultProps = { title: '' };

export default HeaderTemplate;