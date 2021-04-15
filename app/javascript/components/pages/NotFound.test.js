import App from './App,js';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

Enzyme.configure({ adapter: new Adapter()})

