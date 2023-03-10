import styled from 'styled-components';
import { media, colors, adaptFonts } from '../../constants';

export const SectionBox = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: ${media.tablet}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media screen and (min-width: ${media.desktop}) {
    padding-top: 90px;
    padding-bottom: 90px;
  }
`;

export const H1 = styled.h1`
  margin-bottom: 20px;
  color: ${colors.txtBlack};
  font-size: ${adaptFonts.md};

  @media screen and (min-width: ${media.tablet}) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${media.desktop}) {
    margin-bottom: 35px;
  }
`;
