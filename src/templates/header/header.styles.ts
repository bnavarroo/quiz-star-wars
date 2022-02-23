import styled from 'styled-components';
import { ContainerBox } from '@styles/ui/container/container.styles';
import { FlexContainer } from '@styles/ui/flex/flex.styles';
import getContentMinHeight from '@core/theme/theme.helpers';

export const Container = styled(FlexContainer).attrs({
  $direction: 'column',
  $justifyContent: 'space-between',
})`
  width: 100%;
  min-height: 99.8vh;
`;

export const Wrapper = styled(ContainerBox)`
  ${({ theme }) => getContentMinHeight(theme, true)}
`;
