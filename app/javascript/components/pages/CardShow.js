import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"

class CardShow extends Component {
  render() {
    const card = this.props.card;
    console.log(card)
    return (
      <>
        <div className = "center"> 
            <h1>{card.name}</h1>
            <br></br>
            <img src= {card.image} alt="card Image" width="25%" height="25%"></img> 
            <div>Name: {card.name}</div>
            <div>Type: {card.spokemon_type}</div>
            <div>Rarity: {card.rarity}</div>
            <div>Price: {card.price}</div>
        </div>
      </>
    )
  }
}
export default CardShow