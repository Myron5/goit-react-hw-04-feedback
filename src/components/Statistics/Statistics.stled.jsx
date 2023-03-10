import styled from 'styled-components';
import { colors, adaptFonts, other } from '../../constants';

export const StatBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px;
  border-radius: ${other.borderRadius}px;
  border: ${other.border};
  box-shadow: ${other.boxShadow};
`;

export const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 5px;

  ${adaptFonts.sm};
  color: ${colors.txtGrey};
`;
