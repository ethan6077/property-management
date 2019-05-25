import React from 'react';
import styles from './Property.module.css';
import Price from './Price';
import PropertyStatus from './PropertyStatus';
import Address from './Address';

class Property extends React.Component {
  render() {
    const { property } = this.props;
    return (
      <div className={styles.container}>
        <div>
          <Price price={property.price} />
          <PropertyStatus status={property.status} />
        </div>
        <div className={styles.imgContainer}>
          <img src={property.image} />
        </div>
        <div>
          <Address address={property.street} />
        </div>
      </div>
    );
  }
}

export default Property;
