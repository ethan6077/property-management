import React from 'react';
import PropertyList from './PropertyList';
import styles from './PropertyListContainer.module.css';

class PropertyListContainer extends React.Component {
  render() {
    const { propertyList } = this.props;
    return (
      <div className={styles.listContainer}>
        <PropertyList propertyList={propertyList} />
      </div>
    );
  }
}

export default PropertyListContainer;
