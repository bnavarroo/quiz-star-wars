import styled from 'styled-components';
import { FlexContainer } from '@styles/ui/flex/flex.styles';

export const Wrapper = styled(FlexContainer).attrs({
  $flexWrap: 'wrap',
  $justifyContent: 'center',
})`
  gap: 10px;
`;
export default {};
