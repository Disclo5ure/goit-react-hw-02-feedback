import css from './PropertyDisplay.module.css';

export const PropertyDisplay = props => (
  <p className={css.propertyDisplay}>
    {props.type}: {props.number}
  </p>
);
