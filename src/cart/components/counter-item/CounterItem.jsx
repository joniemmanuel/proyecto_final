import PropTypes from 'prop-types';

import counterItemStyles from './counter-item.module.css';

export const CounterItem = ( {counter,increment, decrement, max} ) => {

  return (
    <div className={counterItemStyles.counter}>
        <button onClick={ decrement } >-</button>
        <div>
            <span>{counter}</span>
        </div>
        <button className={`${counter === max && counterItemStyles.error}`} disabled={counter === max} onClick={ () => increment(max) } >+</button>
    </div>
  )
}

CounterItem.propTypes = {
    max: PropTypes.number.isRequired,
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
}