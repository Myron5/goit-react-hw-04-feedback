import PropTypes from 'prop-types';
import { ButtonBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <ButtonBox>
    <Button type="button" onClick={onGood}>
      Good
    </Button>
    <Button type="button" onClick={onNeutral}>
      Neutral
    </Button>
    <Button type="button" onClick={onBad}>
      Bad
    </Button>
  </ButtonBox>
);

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
