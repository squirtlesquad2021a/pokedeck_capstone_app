import UserCardIndex from './UserCardIndex';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

describe('When UserCardIndex renders', () => {
    let renderedUserCardIndex;
    beforeEach(() => {
      renderedUserCardIndex = shallow(<UserCardIndex />);
    });
    it('displays a header and a card deck', () =>{
      // const index = renderedUserCardIndex.find('h2')
      const theDeck = renderedUserCardIndex.find('Row')
      // expect (index.length).toEqual(1)
      expect (theDeck.length).toEqual(1)
    })
  })