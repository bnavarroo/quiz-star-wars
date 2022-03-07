import Head from '@shared/components/head';
import Footer from '@shared/components/footer';
import { ITemplateDefaultProps } from '@templates/template.types';
import * as Styled from './basic.styles';

const BasicTemplate: React.FC<ITemplateDefaultProps> = ({ children }) => (
  <>
    <Head />
    <Styled.Container>
      <Styled.Wrapper>{children}</Styled.Wrapper>
      <Footer />
    </Styled.Container>
  </>
);

export default BasicTemplate;
