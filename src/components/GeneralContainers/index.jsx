import styled from 'styled-components';
import { media, colors } from '../../constants';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding-left: 10px;
  padding-right: 10px;

  max-width: 100%;

  @media screen and (min-width: ${media.mobile}) {
    max-width: 320px;
  }

  @media screen and (min-width: ${media.tablet}) {
    max-width: 760px;

    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (min-width: ${media.desktop}) {
    max-width: 1200px;

    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const AppBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.generalBackground};
`;
