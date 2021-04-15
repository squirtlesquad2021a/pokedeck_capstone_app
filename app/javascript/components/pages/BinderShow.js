import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"

class BinderShow extends Component {
  render() {
    const sleeve = this.props.usersBinders;

    return (
      <>
        <div className = "center"> 
            <h1>{sleeve.name}</h1>
            <br></br>
            <img src= {sleeve.image} alt="sleeve Image" width="25%" height="25%"></img> 
            <div>Name: {sleeve.name}</div>
            <div>Type: {sleeve.pokemon_type}</div>
            <div>Rarity: {sleeve.rarity}</div>
            <div>Price: {sleeve.price}</div>
        </div>
      </>
    )
  }
}
export default BinderShow