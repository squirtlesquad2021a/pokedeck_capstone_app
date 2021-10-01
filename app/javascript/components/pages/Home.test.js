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
    // checking to see if card rows are rendering successfully
    it('displays card index', () => {
      const renderedCard = renderedHome.find('Row');
      expect(renderedCard.length).toEqual(1)
    })
    // does the card contain a navlink inside so that when a user clicks, they get redirected to a separate page?
    it('NavLink for the cards exists', () =>{
      // const index = renderedUserCardIndex.find('h2')
      const renderedNavLinks = renderedHome.find('NavLink')
      // expect (index.length).toEqual(1)
      expect (renderedNavLinks.length).toEqual(1)
    })
    it('displays an h2 tag with a heading', () =>{
      const heading = renderedHome.find('h2')
      expect (heading.length).toEqual(1);
      // checking to make sure that the heading is displaying the correct text.
      expect(heading.text()).toEqual("Browse cards Below");

    })
  })