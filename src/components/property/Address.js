import React from 'react';
import styles from './Address.module.css';

class Address extends React.Component {
  render() {
    const { address } = this.props;
    return (
      <div className={styles.container}>
        {address}
      </div>
    );
  }
}

export default Address;
