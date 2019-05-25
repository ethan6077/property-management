import React from 'react';
import styles from './PropertyStatus.module.css';

class PropertyStatus extends React.Component {
  render() {
    const { status } = this.props;
    return (
      <div className={styles.container}>
        {status}
      </div>
    );
  }
}

export default PropertyStatus;
