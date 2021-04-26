import Home from './Home';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

describe('When Home renders', () => {
    let cards = [
      {
        id: 1,
        name: "Alakazam",
        pokemon_type: "Psychic",
        set_id: "base1",
        set_name: "Base",
        set_series: "Base",
        number: "1",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base1/1_hires.png",
        price: 250
      }
    ]
    let renderedHome;
    beforeEach(() => {
      renderedHome = shallow(<Home cards={cards}/>);
    })
    it('displays card index', () => {
      const renderedCard = renderedHome.find('Row');
      expect(renderedCard.length).toEqual(1)
    })
    it('NavLink for the cards exists', () =>{
      // const index = renderedUserCardIndex.find('h2')
      const renderedNavLinks = renderedHome.find('NavLink')
      // expect (index.length).toEqual(1)
      expect (renderedNavLinks.length).toEqual(1)
    })
  })