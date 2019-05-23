import React from 'react';
import HeaderContainer from './header/HeaderContainer';
import PropertyListContainer from './properties/PropertyListContainer';
import styles from './PropertyPage.module.css';

class PropertyPage extends React.Component {
  constructor() {
    super();
    this.state = {
      propertyFilter: null,
      propertyList: [],
    };
  }

  componentDidMount() {
    fetch('https://code-challenge.activepipe.com/challenge/properties')
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        this.setState({ propertyList: data });
      });
  }

  render() {
    return (
      <div className={styles.propertyPage}>
        <HeaderContainer propertyFilter={this.state.propertyFilter} />
        <PropertyListContainer propertyList={this.state.propertyList} />
      </div>
    );
  }
}

export default PropertyPage;
