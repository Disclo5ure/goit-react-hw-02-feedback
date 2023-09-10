import { PropertyDisplay } from './propertyDisplay/PropertyDisplay';

export const Statistics = props => (
  <section className="statistics-container">
    <PropertyDisplay type="good" number={props.good} />
    <PropertyDisplay type="neutral" number={props.neutral} />
    <PropertyDisplay type="bad" number={props.bad} />
    <PropertyDisplay type="total" number={props.total} />
    <PropertyDisplay
      type="positive feedback"
      number={props.positivePercentage}
    />
  </section>
);
