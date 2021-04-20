import BinderShow from './BinderShow';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter()})

describe('When BinderShow renders', () => {
    let renderedBinderShow;
    let binder = {
      id:1,
      user_id:1,
      card_id:1,
      quantity:1,
      favorites:true,
      card_data:{
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
      }}
  
    beforeEach(() => {
      renderedBinderShow = shallow(<BinderShow binder={binder}/>);
      console.log(renderedBinderShow)
    });
    it('display card information', () =>{
      // const headtext = renderedBinderShow.find('h1')
      const image = renderedBinderShow.find('img')
      // expect (headtext.length).toEqual(1)
      expect (image.length).toEqual(1)
    })
  })