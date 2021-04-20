import React, { Component } from 'react'


class BinderShow extends Component {
  render() {

    const card = this.props.binder.card_data;
    

    return (
      <>
        <div className = "center"> 
            <h1>{card.name}</h1>
            <br></br>
            <img src= {card.image} alt="sleeve Image" width="25%" height="25%"></img> 
            <div>Name: {card.name}</div>
            <div>Type: {card.pokemon_type}</div>
            <div>Rarity: {card.rarity}</div>
            <div>Price: {card.price}</div>
            <div>Quantity: {this.props.binder.quantity}</div>
        </div>
      </>
    )
  }
}
export default BinderShow