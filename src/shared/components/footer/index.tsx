import { memo } from 'react';
import GithubLogo from '@assets/img/github-logo.svg';
import LinkedinLogo from '@assets/img/linkedin-logo.svg';
import { footerLinkProps } from './footer.helpers';
import * as Styled from './footer.styles';

export const FooterComponent: React.FC = () => (
  <Styled.Container>
    <Styled.Wrapper className="no-pseudo">
      <Styled.DevelopByText>
        Desenvolvido por <b>Bruno Navarro</b>
      </Styled.DevelopByText>
      <Styled.ImagesWrapper>
        <Styled.ImageContent
          href="https://github.com/bnavarroo"
          {...footerLinkProps}
        >
          <GithubLogo />
          <span>/bnavarroo</span>
        </Styled.ImageContent>
        <Styled.ImageContent
          href="https://www.linkedin.com/in/bruno-navarro-oliveira/"
          {...footerLinkProps}
        >
          <LinkedinLogo />
          <span>/bruno-navarro-oliveira</span>
        </Styled.ImageContent>
      </Styled.ImagesWrapper>
    </Styled.Wrapper>
  </Styled.Container>
);

export default memo(FooterComponent);
