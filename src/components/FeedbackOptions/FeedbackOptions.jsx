import { Button, Div } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Div>
      <Button
        name="good"
        type="button"
        onClick={e => {
          onLeaveFeedback(e);
        }}
      >
        good
      </Button>
      <Button
        name="neutral"
        type="button"
        onClick={e => {
          onLeaveFeedback(e);
        }}
      >
        neutral
      </Button>
      <Button
        name="bad"
        type="button"
        onClick={e => {
          onLeaveFeedback(e);
        }}
      >
        bad
      </Button>
    </Div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
