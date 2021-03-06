import App from './App';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Splash from './pages/Splash'
import { NavItem } from 'reactstrap';

import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter()})

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
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
      }
      } ),
  })
);
describe('When App renders', () => {
    let renderedApp;
    beforeEach(() => {
      renderedApp = shallow(<App />);
    });
    it('routes to root address', ()=>{
      // const renderedRoutes = renderedApp.find('[path = "/"]');
      expect(location.pathname).toEqual('/')
      // expect(location.pathname).toEqual('/home')

      // expect(renderedRoutes.length).toEqual(1);
      // expect(renderedRoutes.props())
    })
    it('displays rendered routes', () => {
      const renderedRoutes = renderedApp.find('Route');
        expect(renderedRoutes.length).toEqual(8)
       });

    it('displays Footer', () => {
      const renderedFooter = renderedApp.find('Footer');
        expect(renderedFooter.length).toEqual(1)
       });

    })

  // jest.mock('./pages/Splash');

  // describe("Tests for App Router", () => {
  //   test("Should render page header and HomePage on default route", () => {
  //     // Arrange
  //     Splash.mockImplementation(() => <div>SplashMock</div>);
  
  //     // Act
  //     render(
  //       <MemoryRouter>
  //         <App/>
  //       </MemoryRouter>
  //     );
  
  //     // Assert
  //     expect(screen.getByText("SplashMock")).toBeInTheDocument();
  //   });
  // });