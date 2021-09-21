import React, { Component, useState, useEffect } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import logo from '../../../assets/images/PokeLogo1-1-removebg-preview.png'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'
import {
  Navbar,
  Nav, 
  Button,
} from 'react-bootstrap';

import {
  Toast, 
  ToastBody, 
  ToastHeader,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'

const Header = (props) => {
  const [submitted, setSubmitted] = useState(false);
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

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <React.Fragment>
      <Navbar bg="bg-dark" expand="md" className='headerComponents'>
        <Navbar.Brand to="/home">
          <NavLink to="/home">
            <img 
              src={ logo } 
              alt="pokedeckLogo" 
              className="logo" 
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" >
            { logged_in &&
              <React.Fragment>
                <NavLink to="/usercardindex" className="seeMyDeck">
                  See my deck
                </NavLink>
                <NavLink to="/leaderboard" className="seeAllRankings">
                  See All Rankings
                </NavLink>
              </React.Fragment>
            } 
            <NavLink to="/aboutus" className="aboutUs">
              About Us
            </NavLink>
          </Nav>
          { logged_in &&
          <React.Fragment>
            <Nav.Link href={ sign_out_route } className="signOut">Sign Out</Nav.Link>
            </React.Fragment>
          }
          <Nav>
            { logged_in && isUserEligible &&
              <React.Fragment>
                <Button variant="primary" className= "claimButtons" onClick={ handleSubmit }>Claim Card</Button>{' '}
              </React.Fragment>
            }
            { logged_in && !isUserEligible &&
              <React.Fragment>
                <Button variant="info" className= "claimButtons">Daily Card: Unavailable</Button>{' '}
              </React.Fragment>
            }
            { logged_in && userRank.deck_size === 0 &&
              <React.Fragment>
                <Button variant="warning" className= "claimButtons" onClick={ handleBooster }>Free Booster pack</Button>{' '}
              </React.Fragment>
            }
          </Nav>


          <Nav>
            { logged_in &&
              <React.Fragment>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret className='playerInfo'>Player Info</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className='dropDownItems'>Deck Value:$ {userRank.deck_price}</DropdownItem>
                  <DropdownItem className='dropDownItems'>Deck Size: {userRank.deck_size}</DropdownItem>
                  <DropdownItem className='dropDownItems'>our Ranking: {userRank.ranking}</DropdownItem>
                </DropdownMenu>
              </Dropdown>


                {/* <Nav.Link href={ sign_out_route } className="nav-link-devise-text">Sign Out</Nav.Link> */}
              </React.Fragment>
            }
            </Nav>


            <Nav>    
            { !logged_in &&
              <React.Fragment>
                <Nav.Link href={ new_user_route } className="createAccount" >Create Account</Nav.Link>
                <Nav.Link href={ sign_in_route } className="signIn">Sign In</Nav.Link>
              </React.Fragment>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      { submitted && <Redirect to="/usercardindex" /> }
    </React.Fragment>
  );
}
 
export default Header;



  
      