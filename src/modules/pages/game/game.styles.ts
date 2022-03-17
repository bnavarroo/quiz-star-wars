import styled from 'styled-components';
import { StyledButton } from '@styles/ui/button/button.styles';

export const MoreButton = styled(StyledButton).attrs({ $type: 'primary' })`
  display: table;
  margin: 5vh auto;
`;

export default {};
