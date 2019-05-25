import React from 'react';
import classNames from 'classnames';
import styles from './SmallCircle.module.css';

class SmallCircle extends React.Component {
  render() {
    const { status } = this.props;
    return (
      <span className={classNames({
        [styles.current]: status === 'current',
        [styles.sold]: status === 'sold',
        [styles.offMarket]: status === 'off_market',
        [styles.withDrawn]: status === 'withdrawn',
      })}></span>
    );
  }
}

export default SmallCircle;
