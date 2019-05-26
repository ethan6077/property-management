import React from 'react';
import { shallow } from 'enzyme';
import PropertyPage from './PropertyPage';

it('renders without crashing', () => {
  shallow(<PropertyPage />)
});
