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
      favorites:false,
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
  
    let hasUpdateBinderBeenCalled = false

    beforeEach(() => {
      renderedBinderShow = shallow(<BinderShow binder={binder} updateBinder={() => {hasUpdateBinderBeenCalled = true}}/>);
      console.log(renderedBinderShow)
    });
    it('display card information', () =>{
      // const headtext = renderedBinderShow.find('h1')
      const image = renderedBinderShow.find('img')
      // expect (headtext.length).toEqual(1)
      expect (image.length).toEqual(1)
    })
    it('when user clicks checkbox, updateBinder prop is called', () => {

      // Grab the checkbox in our page
      const checkbox = renderedBinderShow.find('CustomInput');

      // Simulate changing checkbox input
      checkbox.simulate('change', { target: { checked: true } });

      // assert
      expect(hasUpdateBinderBeenCalled).toEqual(true)
    })
  })