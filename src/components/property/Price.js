import React from 'react';
import numeral from 'numeral';
import styles from './Price.module.css';

class Price extends React.Component {
  render() {
    const { price } = this.props;
    const priceStr = numeral(price).format('$0,0');
    return (
      <div className={styles.container}>
        {priceStr}
      </div>
    );
  }
}

export default Price;
