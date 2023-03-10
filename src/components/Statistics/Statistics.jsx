import PropTypes from 'prop-types';
import { StatBox, List } from './Statistics.stled';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  message,
}) => (
  <>
    {total === 0 ? (
      <Notification message={message}></Notification>
    ) : (
      <StatBox>
        <List>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}</li>
        </List>
      </StatBox>
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  message: PropTypes.string,
};
