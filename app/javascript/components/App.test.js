import App from './App';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Splash from './pages/Splash'
import { NavItem } from 'reactstrap';


Enzyme.configure({ adapter: new Adapter()})

describe('When App renders', () => {
    let renderedApp;
    beforeEach(() => {
      renderedApp = shallow(<App />);
    });
    it('has routes to all pages', ()=>{
      const renderedRoutes = renderedApp.find("[path="/"]");
      expect(renderedRoutes.length).toEqual(1);
      // expect(renderedRoutes.props())
    })



    // it('displays Footer', () => {
    //     const Footer = shallow(<Footer />)
    //     expect(Footer.find('h6').text()).toEqual("&copy; Squirtle Squad");
    //   });

    })