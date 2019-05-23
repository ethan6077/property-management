import React from 'react';
import PropertyList from './PropertyList';

class PropertyPage extends React.Component {
  constructor() {
    super();
    this.state = {
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
    return <PropertyList propertyList={this.state.propertyList} />;
  }
}

export default PropertyPage;
