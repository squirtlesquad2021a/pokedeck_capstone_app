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
    })
    it('displays a span tag with instructions', () =>{
      const spann = renderedSplash.find('span')
      expect (spann.length).toEqual(1)
      expect(spann.text()).toEqual("(Click Logo to Begin)")
    })
    it('displays 4 h1 tags', () =>{
      const largeLetters = renderedSplash.find('p')
      expect (largeLetters.length).toEqual(1)
    })
    it('displays music play options', () =>{
      const music = renderedSplash.find('ReactHowler')
      expect (music.length).toEqual(1)
    })
  })