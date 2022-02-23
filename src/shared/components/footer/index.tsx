import { memo } from 'react';
import GithubLogo from '@assets/img/github-logo.svg';
import LinkedinLogo from '@assets/img/linkedin-logo.svg';
import { footerLinkProps } from './footer.helpers';
import {
  Container,
  Wrapper,
  DevelopByText,
  ImagesWrapper,
  ImageContent,
} from './footer.styles';

const Footer: React.FC = () => (
  <Container>
    <Wrapper className="no-pseudo">
      <DevelopByText>
        Desenvolvido por <b>Bruno Navarro</b>
      </DevelopByText>
      <ImagesWrapper>
        <ImageContent href="https://github.com/bnavarroo" {...footerLinkProps}>
          <GithubLogo />
          <span>/bnavarroo</span>
        </ImageContent>
        <ImageContent
          href="https://www.linkedin.com/in/bruno-navarro-oliveira/"
          {...footerLinkProps}
        >
          <LinkedinLogo />
          <span>/bruno-navarro-oliveira</span>
        </ImageContent>
      </ImagesWrapper>
    </Wrapper>
  </Container>
);

export default memo(Footer);
