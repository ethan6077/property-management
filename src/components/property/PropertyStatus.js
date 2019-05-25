import React from 'react';
import SmallCircle from './SmallCircle';
import styles from './PropertyStatus.module.css';

class PropertyStatus extends React.Component {
  render() {
    const { status } = this.props;
    return (
      <div>
        <span className={styles.text}>{status}</span>
        <SmallCircle status={status} />
      </div>
    );
  }
}

export default PropertyStatus;
