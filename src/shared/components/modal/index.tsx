import ReactDOM from 'react-dom';
import { IProps } from './modal.types';
import {
  Backdrop,
  Wrapper,
  StyledModal,
  Header,
  CloseButton,
  Content,
} from './modal.styles';

const Modal: React.FunctionComponent<IProps> = ({
  isVisible,
  onHide,
  children,
}) => {
  const modalComponent = (
    <>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <CloseButton onClick={onHide}>X</CloseButton>
          </Header>
          <Content>{children}</Content>
        </StyledModal>
      </Wrapper>
    </>
  );

  return isVisible
    ? ReactDOM.createPortal(modalComponent, document.body)
    : null;
};

export default Modal;
