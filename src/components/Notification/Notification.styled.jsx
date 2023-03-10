import styled from 'styled-components';
import { colors, adaptFonts } from '../../constants';

export const Message = styled.p`
  display: inline-block;
  padding: 10px;

  ${adaptFonts.md}
  font-weight: 500;
  color: ${colors.txtBlack};

  border: 1px solid #ff000050;
`;
