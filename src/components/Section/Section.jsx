import PropTypes from 'prop-types';
import { Container } from '../GeneralContainers';
import { SectionBox, H1 } from './Section.styled';

export const Section = ({ title = 'Please leave feedback', children }) => {
  return (
    <SectionBox>
      <Container>
        <H1>{title}</H1>
        {children}
      </Container>
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
