import React from 'react';
import styles from './HeaderContainer.module.css';

class HeaderContainer extends React.Component {
  render() {
    const { propertyFilter } = this.props;
    return (
      <div className={styles.headerContainer}>
        <select>
          <option value="current">CURRENT</option>
          <option value="sold">SOLD</option>
        </select>
      </div>
    );
  }
}

export default HeaderContainer;
