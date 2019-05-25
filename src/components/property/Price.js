import React from 'react';
import styles from './Price.module.css';

class Price extends React.Component {
  render() {
    const { price } = this.props;
    return (
      <div className={styles.container}>
        {price}
      </div>
    );
  }
}

export default Price;
