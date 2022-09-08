import { P } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, posFeedbacks }) => {
  if (total === 0) return <P>No feedback given</P>;
  return (
    <>
      <P>Good: {good}</P>
      <P>Neutral: {neutral}</P>
      <P>Bad: {bad}</P>
      <P>Total: {total}</P>
      <P>Positive feedback: {posFeedbacks}%</P>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  posFeedbacks: PropTypes.number.isRequired,
};

export default Statistics;
