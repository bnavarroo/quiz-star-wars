import styled from 'styled-components';
import { ContainerBox } from '@styles/ui/container/container.styles';
import getContentMinHeight from '@core/theme/theme.helpers';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 99.8vh;
`;

export const Wrapper = styled(ContainerBox)`
  ${({ theme }) => getContentMinHeight(theme, false)}
`;
