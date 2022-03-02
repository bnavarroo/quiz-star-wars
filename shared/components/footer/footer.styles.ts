import styled, { css } from 'styled-components';
import { ContainerBox } from '@styles/ui/container/container.styles';

export const Container = styled.footer`
  display: table;
  width: 100%;
  padding: 15px 0;
`;

export const Wrapper = styled(ContainerBox)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &.no-pseudo {
    &:before,
    &:after {
      display: none;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    flex-direction: row;
  }
`;

export const DevelopByText = styled.div`
  font-size: 12px;
  b {
    font-weight: 600;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  margin-top: 15px;

  a + a {
    margin-left: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    margin-top: 0px;
  }
`;

export const ImageContent = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};

  span {
    margin-left: 5px;
    display: none;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
      display: block;
    }
  }

  svg {
    height: 30px;
    width: auto;
    stroke-width: 5px;
    ${({ theme }) => css`
      fill: ${theme.colors.primary};
      stroke: ${theme.colors.text.onPrimary};
    `};
  }
`;
