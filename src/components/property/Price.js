import React from 'react';
import numeral from 'numeral';

class Price extends React.Component {
  render() {
    const { price } = this.props;
    const priceStr = numeral(price).format('$0,0');
    return (
      <div>
        {priceStr}
      </div>
    );
  }
}

export default Price;
