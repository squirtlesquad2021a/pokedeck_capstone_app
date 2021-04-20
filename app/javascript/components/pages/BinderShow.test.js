import BinderShow from './BinderShow';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter()})

describe('When BinderShow renders', () => {
    let renderedBinderShow;
    beforeEach(() => {
      renderedBinderShow = shallow(<BinderShow />);
      console.log(renderedBinderShow)
    });
    it('display card information', () =>{
      // const headtext = renderedBinderShow.find('h1')
      const image = renderedBinderShow.find('img')
      // expect (headtext.length).toEqual(1)
      expect (image.length).toEqual(1)
    })
  })