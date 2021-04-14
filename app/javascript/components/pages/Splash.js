import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import PokeLogo from '../../../assets/images/PokeLogo2-1-removebg-preview.png'
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
  import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'


class Splash extends Component{
render() {
    return(
        <>
        
        <div 
            className = "splash">
                <div 
                    className= "square">
                        <img src= {PokeLogo}></img>
                </div>
                
        </div>
            
        </>
        
    )
    }
}
export default Splash