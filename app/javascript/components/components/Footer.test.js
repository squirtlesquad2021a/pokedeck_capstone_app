import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer.js'

Enzyme.configure({ adapter: new Adapter()})
describe('When Footer renders', () => {
  it('displays a Footer', () => {
    const footer = shallow(<Footer />);
    const footerText = footer.find('h2');
    expect (footerText.length).toEqual(1)
  });
})