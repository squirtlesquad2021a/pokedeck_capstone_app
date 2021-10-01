import CardShow from './CardShow';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

describe('When CardShow renders', () => {
    let renderedCardShow;
    let card = {
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
    beforeEach(() => {
      renderedCardShow = shallow(<CardShow card={card}/>);
    });
    it('displays a header', () =>{
      const headerTag = renderedCardShow.find('h1')
      expect (headerTag.length).toEqual(1)
    })
    it('displays card information', () =>{
      const headerTag = renderedCardShow.find('div')
      expect (headerTag.length).toEqual(6)
    })
  })