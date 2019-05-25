import React from 'react';
import Property from '../property/Property';
import styles from './PropertyListItem.module.css';

class PropertyListItem extends React.Component {
  render() {
    const { property } = this.props;
    return (
      <li className={styles.container}>
        <Property property={property} />
      </li>
    );
  }
}

export default PropertyListItem;
