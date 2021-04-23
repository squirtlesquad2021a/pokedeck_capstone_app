
import React, { Component } from "react"
import { NavLink } from 'react-router-dom'

import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Container, Row, Col
  } from 'reactstrap';




class Home extends Component{
  

  
render() {

    const {
        logged_in,
        sign_in_route,
        sign_out_route,
        new_user_route
      } = this.props

      
    return(
        <>
        <h2 className="center">Browse cards</h2>
        <div className="cardBox" >
        <Row xs="4">
        {/* <CardDeck> */}
        {this.props.cards && this.props.cards.map((card, index) => {
            return (
            <Col key = {index} >
              <Card key = {index} className="cards">
                  <NavLink to={`/cardshow/${card.id}`}>
                  <CardImg top width="100%" src={card.image} alt="Card image" />
                  </NavLink>
              </Card>
              <br></br>
              <br></br>
            </Col>
        )})}
        </Row>
        {/* </CardDeck> */}
        </div>
        </>   
    )
    }
    }
  


export default Home