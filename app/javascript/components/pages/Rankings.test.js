import Rankings from './Rankings';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

describe('When Rankings renders', () => {
    let renderedRankings;
    beforeEach(() => {
      renderedRankings = shallow(<Rankings />);
    });
    it('displays a table', () =>{
      const laMesa = renderedRankings.find('Table')
      expect (laMesa.length).toEqual(1)
      
    })
  })