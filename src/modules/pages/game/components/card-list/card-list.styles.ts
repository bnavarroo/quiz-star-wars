import styled from 'styled-components';
import { FlexContainer } from '@styles/ui/flex/flex.styles';
import { StyledButton } from '@styles/ui/button/button.styles';

export const Wrapper = styled(FlexContainer).attrs({
  $flexWrap: 'wrap',
  $justifyContent: 'center',
})`
  gap: 10px;
`;

export const MoreButton = styled(StyledButton).attrs({ $type: 'primary' })`
  display: table;
  margin: 5vh auto;
`;
