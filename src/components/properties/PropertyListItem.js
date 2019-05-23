import React from 'react';
import styles from './PropertyListItem.module.css';

class PropertyListItem extends React.Component {
  render() {
    const { property } = this.props;
    return <li className={styles.container}>{property.price}</li>;
  }
}

export default PropertyListItem;
