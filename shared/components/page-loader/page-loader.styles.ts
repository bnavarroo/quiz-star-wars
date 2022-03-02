import styled from 'styled-components';
import { FlexContainer } from '@styles/ui/flex/flex.styles';

const Loader = styled(FlexContainer).attrs({
  $alignItems: 'center',
  $justifyContent: 'center',
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.75s, visibility 0.75s;

  &::after {
    content: '';
    width: 50px;
    height: 50px;
    border: 10px solid #000;
    border-top-color: #fdff00;
    border-radius: 50%;
    animation: loading 0.75s ease infinite;
    box-shadow: 0px 0px 0px 3px #000;
  }

  @keyframes loading {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
  }
`;

export default Loader;
