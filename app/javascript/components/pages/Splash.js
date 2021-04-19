import React, { Component } from "react"
import PokeLogo from '../../../assets/images/PokeLogo2-1-removebg-preview.png'




class Splash extends Component{
render() {
    return(
        <>
        <div className = "splash">
        <div className= "square">
            <a href="/home"><img src= {PokeLogo} alt="pokedeckLogo" className= "logo-splash" /></a>
        </div>    
        <div className= "orangeSquare">
        </div>
        </div>
        </>
    )
    }
}
export default Splash