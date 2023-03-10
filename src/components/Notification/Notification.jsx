import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

export const Notification = ({ message = 'There is no feedback given' }) => (
  <Message>{message}</Message>
);

Notification.propTypes = {
  message: PropTypes.string,
};
