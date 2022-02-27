import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 10px);
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    width: calc(50% - 10px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopSmall.min}) {
    width: calc(20% - 10px);
  }
`;

export const Image = styled.img`
  width: 100%;
`;
