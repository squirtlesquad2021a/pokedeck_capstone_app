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
    it('displays a paragragh and 5 modals', () =>{
      const paragragh = renderedAboutUs.find('p')
      const modals = renderedAboutUs.find('Modal')
      expect (paragragh.length).toEqual(1)
      expect (modals.length).toEqual(5)
    })
  })
    