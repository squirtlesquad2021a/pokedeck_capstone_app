import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import PokeLogo from '../../../assets/images/PokeLogo1-1-removebg-preview.png'
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
                        <a href="/home"><img src= {PokeLogo} alt="pokedeckLogo" className= "logo-splash" /></a>
        
                </div>
                
        </div>
            
        </>
        
    )
    }
}
export default Splash