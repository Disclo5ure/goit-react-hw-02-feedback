import css from './ReviewButton.module.css';

export const ReviewButton = props => (
  <button className={css.reviewButton} onClick={props.handleClick}>
    {props.children}
  </button>
);
