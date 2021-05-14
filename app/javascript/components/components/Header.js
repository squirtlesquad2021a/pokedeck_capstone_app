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
  ToastHeader
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

  return (
    <React.Fragment>
      <Navbar bg="secondary" expand="lg">
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
          <Nav className="mr-auto">
            { logged_in &&
              <React.Fragment>
                <NavLink to="/usercardindex" className="nav-link devise-text">
                  See my deck
                </NavLink>
                <NavLink to="/leaderboard" className="nav-link devise-text">
                  See All Rankings
                </NavLink>
              </React.Fragment>
            } 
            <NavLink to="/aboutus" className="nav-link devise-text">
              About Us
            </NavLink>
          </Nav>
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
                <Nav.Link href={ sign_out_route } className="nav-link devise-text">Sign Out</Nav.Link>
              </React.Fragment>
            }
            </Nav>
            <Nav>    
            { !logged_in &&
              <React.Fragment>
                <Nav.Link href={ new_user_route } className="nav-link devise-text" >Create Account</Nav.Link>
                <Nav.Link href={ sign_in_route } className="nav-link devise-text">Sign In</Nav.Link>
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

  
      