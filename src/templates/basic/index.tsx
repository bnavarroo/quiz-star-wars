import Head from '@shared/components/head';
import Footer from '@shared/components/footer';
import { TemplateDefaultProps } from '@templates/template.types';
import { Container, Wrapper } from './basic.styles';

const BasicTemplate: React.FC<TemplateDefaultProps> = ({ children, title }) => (
  <>
    <Head title={title} />
    <Container>
      <Wrapper>{children}</Wrapper>
      <Footer />
    </Container>
  </>
);

BasicTemplate.defaultProps = { title: '' };

export default BasicTemplate;
