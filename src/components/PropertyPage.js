import React from 'react';
import HeaderContainer from './header/HeaderContainer';
import PropertyListContainer from './properties/PropertyListContainer';
import styles from './PropertyPage.module.css';

class PropertyPage extends React.Component {
  constructor() {
    super();
    this.state = {
      propertyFilter: 'default',
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

  changeFilter = (event) => {
    this.setState({
      propertyFilter: event.target.value,
    });
  }

  render() {
    let filteredPropertyList = [];
    if (this.state.propertyFilter !== 'default') {
      filteredPropertyList = this.state.propertyList.filter(p => p.status === this.state.propertyFilter);
    } else {
      filteredPropertyList = this.state.propertyList;
    }
    return (
      <div className={styles.propertyPage}>
        <HeaderContainer propertyFilter={this.state.propertyFilter} changeFilter={this.changeFilter} />
        <PropertyListContainer propertyList={filteredPropertyList} />
      </div>
    );
  }
}

export default PropertyPage;
