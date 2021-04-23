import React, { Component, useState, useEffect } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
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
  Button,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Toast, ToastBody, ToastHeader
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const toggle = () => setIsOpen(!isOpen);



  const {
      logged_in,
      sign_in_route,
      sign_out_route,
      new_user_route,
      current_user,
      isUserEligible,
      bindersleeves,
      userRank
    } = props
  

  const handleSubmit = () => {
    props.claimDailyCard(current_user.id)
    setSubmitted(true)
  }

  const handleBooster = () => {
    props.claimBoosterPack(current_user.id)
    setSubmitted(true)
  }

  // let usersBinders = []

  // if (current_user) {
  //   usersBinders = bindersleeves.filter(binder => {
  //     return binder.user_id === current_user.id
  //   })
  // }

  // console.log( usersBinders )

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
            
            { logged_in && isUserEligible &&
            <>
              <NavItem>
                <Button color="primary" className= "claimButtons" onClick={ handleSubmit }>Claim Card</Button>{' '}
              </NavItem>
            </>
            }

            { logged_in && userRank.deck_size === 0 &&
            <>
              <NavItem>
                <Button color="warning" className= "claimButtons" onClick={ handleBooster }>Free Booster pack</Button>{' '}
              </NavItem>  
            </>
            }

            { logged_in &&
            <>
              <NavItem>
                <NavLink to="/usercardindex" className="nav-link devise-text">See my deck</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/rankings" className="nav-link devise-text">See All Rankings</NavLink>
              </NavItem>
            </>
            }

          </Nav>
          <Nav>
            { logged_in &&
            <>
            <div className="p-3 my-2 rounded">
              <Toast >
                <ToastHeader>
                  {userRank.username}
                </ToastHeader>
                <ToastBody >
                  Deck Value:$ {userRank.deck_price}             
                  <br></br>
                  Deck Size: {userRank.deck_size}
                  <br></br>
                  Your Ranking: {userRank.ranking}
                </ToastBody>
              </Toast>
            </div>
              <NavItem>
                <a href={ sign_out_route } className="nav-link devise-text">Sign Out</a>
              </NavItem>
            </>
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

    { submitted && <Redirect to="/usercardindex" /> }
  </>
  );
  }
 
export default Header;



<UncontrolledDropdown>
      <DropdownToggle caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>


  
      