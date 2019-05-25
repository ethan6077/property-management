import React from 'react';
import styles from './SmallCircle.module.css';

class SmallCircle extends React.Component {
  render() {
    const { status } = this.props;
    return (
      <span className={styles.dot}></span>
    );
  }
}

export default SmallCircle;
