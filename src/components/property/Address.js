import React from 'react';
import styles from './Address.module.css';

class Address extends React.Component {
  render() {
    const { street, suburb, state, postcode } = this.props;
    return (
      <div className={styles.container}>
        <span>{street}</span>
        <span>{suburb}</span>
        <span>{state + ' ' + postcode}</span>
      </div>
    );
  }
}

export default Address;
