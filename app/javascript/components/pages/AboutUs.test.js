import AboutUs from './AboutUs';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

describe('When AboutUs renders', () => {
    let renderedAboutUs;
    beforeEach(() => {
      renderedAboutUs = shallow(<AboutUs />);
    });
    it('displays a header and 5 classname= mt-1', () =>{
      const header = renderedAboutUs.find('h3')
      const classes = renderedAboutUs.find('.mt-1')
      expect (header.length).toEqual(1)
      expect (classes.length).toEqual(5)
      expect (header)
    })
  })
    