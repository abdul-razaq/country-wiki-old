import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../components/Header';
import Spinner from '../components/Spinner';
import AllCountries from '../pages/AllCountries';
import AllCountriesCard from '../pages/AllCountries/AllCountriesCard';

// Configure enzyme with this App
configure({ adapter: new Adapter() });

describe('<AllSelected />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AllCountries />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AllCountries />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render Header component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render Spinner component', () => {
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it('should render AllCountriesCard component', () => {
    expect(wrapper.find(AllCountriesCard)).toHaveLength(1);
  });
});
