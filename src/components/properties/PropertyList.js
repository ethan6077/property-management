import React from 'react';
import PropertyListItem from './PropertyListItem';
import styles from './PropertyList.module.css';

class PropertyList extends React.Component {
  renderItem(item) {
    return <PropertyListItem key={item.id} property={item} />;
  }

  render() {
    const { propertyList } = this.props;
    return (
      <ul className={styles.container}>{propertyList.map(item => this.renderItem(item))}</ul>
    );
  }
}

export default PropertyList;
