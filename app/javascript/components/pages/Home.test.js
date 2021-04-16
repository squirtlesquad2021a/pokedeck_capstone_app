import Home from './Home';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

describe('When Home renders', () => {
    let renderedHome;
    beforeEach(() => {
      renderedHome = shallow(<Home />);
    })
    it('displays card index', () => {
      const renderedCard = renderedHome.find('CardDeck');
      expect(renderedCard.length).toEqual(1)
    })
  })