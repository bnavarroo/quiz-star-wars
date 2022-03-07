import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import closeModal from './modal.helpers';
import { IProps } from './modal.types';
import * as Styled from './modal.styles';

const Modal: React.FunctionComponent<IProps> = ({
  isVisible,
  onHide,
  children,
}) => {
  const [open, setOpen] = useState<boolean>(isVisible);

  useEffect(() => {
    setOpen(isVisible);
  }, [isVisible]);

  const modalComponent = (
    <>
      <Styled.Backdrop />
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.CloseButton onClick={closeModal(setOpen, onHide)}>
            <Styled.CloseIcon />
          </Styled.CloseButton>
          <Styled.Content>{children}</Styled.Content>
        </Styled.Wrapper>
      </Styled.Container>
    </>
  );

  return open ? ReactDOM.createPortal(modalComponent, document.body) : null;
};

export default Modal;
