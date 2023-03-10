import styled from 'styled-components';
import { colors, adaptFonts, other } from '../../constants';

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;

  margin-bottom: 30px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 15px 30px;

  ${adaptFonts.sm}
  font-weight: 500;
  color: ${colors.txtBlack};

  background-color: ${colors.white};
  border: none;
  box-shadow: none;
  transition: box-shadow ${other.animation};

  &:hover {
    box-shadow: ${other.boxShadow};
  }
`;
