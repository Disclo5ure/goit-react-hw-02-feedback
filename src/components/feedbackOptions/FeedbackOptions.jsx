import { ReviewButton } from './reviewButton/ReviewButton';

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
