import { useState } from 'react';
import ReactDOM from 'react-dom';
import closeModal from './modal.helpers';
import { IProps } from './modal.types';
import {
  Backdrop,
  Container,
  Wrapper,
  CloseButton,
  CloseIcon,
  Content,
} from './modal.styles';

const Modal: React.FunctionComponent<IProps> = ({
  isVisible,
  onHide,
  children,
}) => {
  const [open, setOpen] = useState<boolean>(isVisible);
  const modalComponent = (
    <>
      <Backdrop />
      <Container>
        <Wrapper>
          <CloseButton onClick={closeModal(setOpen, onHide)}>
            <CloseIcon />
          </CloseButton>
          <Content>{children}</Content>
        </Wrapper>
      </Container>
    </>
  );

  return open ? ReactDOM.createPortal(modalComponent, document.body) : null;
};

export default Modal;
