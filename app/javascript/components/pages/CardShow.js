import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"

class CardShow extends Component {
  render() {
    const card = this.props.card;

    return (
      <>
      <h1 className='cardShowName'>{card.name}</h1>
            <br></br>
        <div className = "showText"> 
            <img src= {card.image} alt="card Image" width="25%" height="25%"></img> 
            <div className='cardInfo'>
              <div>Name: {card.name}</div>
              <div>Type: {card.pokemon_type}</div>
              <div>Rarity: {card.rarity}</div>
              <div>Price: {card.price}</div>
            </div>
        </div>
      </>
    )
  }
}
export default CardShow