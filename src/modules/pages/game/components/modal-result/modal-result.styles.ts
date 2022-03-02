import styled from 'styled-components';
import { FlexContainer } from '@styles/ui/flex/flex.styles';

export const Container = styled(FlexContainer).attrs({
  $direction: 'column',
  $justifyContent: 'center',
  $alignItems: 'center',
})`
  min-width: 80vw;
  min-height: 200px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopSmall.min}) {
    min-width: 40vw;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 40px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;

export const PointsWrapper = styled(FlexContainer).attrs({
  $justifyContent: 'center',
  $alignItems: 'center',
})`
  font-size: 30px;
  text-align: center;
  gap: 5px;
`;

export const Points = styled.b`
  font-size: 50px;
  font-weight: 600;
`;

export const Message = styled.p`
  font-size: 16px;
  text-align: center;
  margin-top: 40px;
  font-style: italic;
`;
