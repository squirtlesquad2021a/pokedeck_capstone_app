import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header.js'


Enzyme.configure({ adapter: new Adapter()})
describe('When Header renders', () => {
  it('displays a Header', () => {
    const header = shallow(<Header />);
    const headerLink = header.find('NavLink');
    expect(headerLink.length).toEqual(2);
    // expect(location.pathname).toEqual('/')
  });
  // I want to test that an error is raised if header does not render properly.
  it('')
})