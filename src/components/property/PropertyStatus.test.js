import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PropertyStatus from './PropertyStatus';
import SmallCircle from './SmallCircle';
import StatusMap from '../header/StatusMap';

it('renders without crashing', () => {
  shallow(<PropertyStatus />);
});

it('SmallCircle props change according to property status', () => {
  describe('property status - current', () => {
    const propertyStatusWrapper = shallow(<PropertyStatus status="current" />);
    expect(propertyStatusWrapper.find(SmallCircle).props().status).to.equal('current');
  });
  describe('property status - sold', () => {
    const propertyStatusWrapper = shallow(<PropertyStatus status="sold" />);
    expect(propertyStatusWrapper.find(SmallCircle).props().status).to.equal('sold');
  });
});

it('Status Value change according to property status', () => {
  describe('property status - current', () => {
    const propertyStatusWrapper = shallow(<PropertyStatus status="current" />);
    expect(propertyStatusWrapper.find('span').text()).to.equal(StatusMap.get('current'));
  });
  describe('property status - sold', () => {
    const propertyStatusWrapper = shallow(<PropertyStatus status="sold" />);
    expect(propertyStatusWrapper.find('span').text()).to.equal(StatusMap.get('sold'));
  });
});
