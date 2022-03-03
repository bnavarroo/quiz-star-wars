import styled from 'styled-components';
import { StyledButton } from '@styles/ui/button/button.styles';
import { FlexContainer } from '@styles/ui/flex/flex.styles';

export const Container = styled.div`
  width: calc(100% - 10px);
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid;
  border-radius: 4px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    width: calc(50% - 10px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopSmall.min}) {
    width: calc(20% - 10px);
  }
`;

export const ImageWrapper = styled.div`
  min-height: 0px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    min-height: 370px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopSmall.min}) {
    min-height: 277px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const ButtonsWrapper = styled(FlexContainer)`
  gap: 10px;

  button {
    flex-grow: 1;
  }
`;

export const ActionButton = styled(StyledButton).attrs({
  $type: 'primary',
  $size: 'small',
})``;

export const HelpButton = styled(StyledButton).attrs({
  $type: 'primary',
  $size: 'small',
  $outline: true,
})``;
