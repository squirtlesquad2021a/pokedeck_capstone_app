import Splash from './Splash';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

describe('When Splash renders', () => {
    let renderedSplash;
    beforeEach(() => {
      renderedSplash = shallow(<Splash />);
    });
    it('displays an anchor tag and a paragraph tag', () =>{
      const paragragh = renderedSplash.find('p')
      const anchor = renderedSplash.find('a')
      expect (paragragh.length).toEqual(1)
      expect (anchor.length).toEqual(1)
      // expect(response).to have_http_status(200)
    })
  })