import NotFound from './NotFound';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

describe('When NotFound renders', () => {
    let renderedNotFound;
    beforeEach(() => {
      renderedNotFound = shallow(<NotFound />);
    });
    it('displays a header tag and an image', () =>{
      const headerFind = renderedNotFound.find('h3')
      const sudowoodo = renderedNotFound.find('img')
      expect (headerFind.length).toEqual(1)
      expect (sudowoodo.length).toEqual(1)
    })
  })