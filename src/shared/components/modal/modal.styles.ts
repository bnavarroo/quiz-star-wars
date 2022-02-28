import styled from 'styled-components';
import CloseIconSvg from '@assets/img/close-icon.svg';

export const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
`;

export const Container = styled.div`
  position: fixed;
  width: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid #000;
  border-radius: 8px;
  z-index: 9;
`;

export const Wrapper = styled.div`
  z-index: 9;
  background: #fff;
  position: relative;
  margin: auto;
  border-radius: 8px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0px;
  border: none;
  padding: 10px;
  background: transparent;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 40px 10px 10px;
  max-height: 60vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const CloseIcon = styled(CloseIconSvg)`
  fill: #000;
  width: 12px;
  height: 12px;
`;
