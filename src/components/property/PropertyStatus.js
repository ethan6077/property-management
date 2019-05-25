import React from 'react';
import SmallCircle from './SmallCircle';
import StatusMap from '../header/StatusMap';
import styles from './PropertyStatus.module.css';

class PropertyStatus extends React.Component {
  render() {
    const { status } = this.props;
    const statusValue = StatusMap.get(status);
    return (
      <div>
        <span className={styles.text}>{statusValue}</span>
        <SmallCircle status={status} />
      </div>
    );
  }
}

export default PropertyStatus;
