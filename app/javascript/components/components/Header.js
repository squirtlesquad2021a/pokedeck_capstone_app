import React, { Component, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/PokeLogo1-1-removebg-preview.png'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const {
      logged_in,
      sign_in_route,
      sign_out_route,
      new_user_route
    } = props
    

  return (
    <>
    <div className="header-main"></div>
      <Navbar color="secondary" dark expand="md">
        {/* <Container> */}
        <Nav>
        <NavItem>
        <NavLink to="/home"><img src={ logo } alt="pokedeckLogo" className="logo" /></NavLink>
        </NavItem>
        <NavbarToggler onClick={toggle} />
        </Nav>
   
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
              { logged_in && 
              <>
                <NavItem>
                  <NavLink to="/claimcard" className="nav-link devise-text">Claim your daily card</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/usercardindex" className="nav-link devise-text">See my deck</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/rankings" className="nav-link devise-text">See Rankings</NavLink>
                </NavItem>
              </>
            }
          </Nav>
          <Nav>
            { logged_in &&
              <NavItem>
                <a href={ sign_out_route } className="nav-link devise-text">Sign Out</a>
              </NavItem>
            }
                
            { !logged_in &&
              <>
                <NavItem>
                  <a href={ new_user_route } className="nav-link devise-text" >Create Account</a>
                </NavItem>
                <NavItem>
                  <a href={ sign_in_route } className="nav-link devise-text">Sign In</a>
                </NavItem>
              </>
            }
          </Nav>
        </Collapse>
      {/* </Container> */}
    </Navbar>
  </>
  );
  }
 
export default Header;