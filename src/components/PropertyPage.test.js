import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PropertyPage from './PropertyPage';
import HeaderContainer from './header/HeaderContainer';
import PropertyListContainer from './properties/PropertyListContainer';
import Loader from './common/Loader';
import Error from './common/Error';

it('renders without crashing', () => {
  shallow(<PropertyPage />);
});

it('renders nothing when propertyStatus is initial', () => {
  const propertyPageWrapper = shallow(<PropertyPage />, { disableLifecycleMethods: true });
  expect(propertyPageWrapper.find(Loader)).to.have.lengthOf(0);
  expect(propertyPageWrapper.find(Error)).to.have.lengthOf(0);
});

it('renders Loader when propertyStatus is loading', () => {
  const propertyPageWrapper = shallow(<PropertyPage />, { disableLifecycleMethods: true });
  propertyPageWrapper.setState({ propertyStatus: 'loading' });
  expect(propertyPageWrapper.find(Loader)).to.have.lengthOf(1);
});

it('renders Error when propertyStatus is error', () => {
  const propertyPageWrapper = shallow(<PropertyPage />, { disableLifecycleMethods: true });
  propertyPageWrapper.setState({ propertyStatus: 'error' });
  expect(propertyPageWrapper.find(Error)).to.have.lengthOf(1);
});

it('renders HeaderContainer and PropertyListContainer when propertyStatus is done', () => {
  const propertyPageWrapper = shallow(<PropertyPage />, { disableLifecycleMethods: true });
  propertyPageWrapper.setState({ propertyStatus: 'done' });
  expect(propertyPageWrapper.find(HeaderContainer)).to.have.lengthOf(1);
  expect(propertyPageWrapper.find(PropertyListContainer)).to.have.lengthOf(1);
});
