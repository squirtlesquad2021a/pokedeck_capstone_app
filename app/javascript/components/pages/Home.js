
import React, { Component } from "react"
import { NavLink } from 'react-router-dom'

import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';


class Home extends Component{
render() {
    // console.log(this.props.cards)
    const {
        logged_in,
        sign_in_route,
        sign_out_route,
        new_user_route
      } = this.props

      
    return(
        <>
        <h2 className="center">Browse cards</h2>
        
        <CardDeck>
        {this.props.cards && this.props.cards.map((card, index) => {
              return (
            <Card key = {index}>
                <NavLink to={`/cardshow/${card.id}`}>
                <CardImg top width="100%" src={card.image} alt="Card image" />
                </NavLink>
            </Card>
        )})}
        </CardDeck>
        </>   
    )
    }}

export default Home