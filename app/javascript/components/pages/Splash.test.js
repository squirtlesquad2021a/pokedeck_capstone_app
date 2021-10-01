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
    it('displays an anchor tag', () =>{
      const anchor = renderedSplash.find('a')
      expect (anchor.length).toEqual(1)
    })
    it('displays 2 span tags with instructions', () =>{
      const spann = renderedSplash.find('span')
      expect (spann.length).toEqual(2)
    })
    it('displays 4 h1 tags', () =>{
      const largeLetters = renderedSplash.find('h1')
      expect (largeLetters.length).toEqual(4)
    })
    it('displays music play options', () =>{
      const music = renderedSplash.find('ReactHowler')
      expect (music.length).toEqual(1)
    })
    it('displays 5 images', () =>{
      const images = renderedSplash.find('img')
      expect (images.length).toEqual(5)
    })
  })