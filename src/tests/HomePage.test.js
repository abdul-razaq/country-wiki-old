import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HomePage from '../pages/HomePage';
import Header from '../components/Header';
import Search from '../components/Search';
import HomeCard from '../pages/HomePage/HomeCard';
import Button from '../components/Button';

configure({ adapter: new Adapter() });

describe('<HomePage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it('should render <Header /> component', () => {
    expect(wrapper.find(Header, 'div')).toHaveLength(1);
  });

  it('should render the <Search /> component', () => {
    expect(wrapper.find(Search));
  });

  it('should render the <HomeCard /> component', () => {
    expect(wrapper.find(HomeCard));
  });

  it('should have a button component', () => {
    expect(wrapper.find(Button));
  })
});
