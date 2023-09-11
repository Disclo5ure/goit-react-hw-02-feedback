import { ReviewButton } from './reviewButton/ReviewButton';
import PropTypes from 'prop-types';

export const FeedbackOptions = props => (
  <div className="button-container">
    <ReviewButton handleClick={() => props.onLeaveFeedback(props.options.good)}>
      {props.options.good}
    </ReviewButton>
    <ReviewButton
      handleClick={() => props.onLeaveFeedback(props.options.neutral)}
    >
      {props.options.neutral}
    </ReviewButton>
    <ReviewButton handleClick={() => props.onLeaveFeedback(props.options.bad)}>
      {props.options.bad}
    </ReviewButton>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.string,
    neutral: PropTypes.string,
    bad: PropTypes.string,
  }),
  onLeaveFeedback: PropTypes.func,
};
