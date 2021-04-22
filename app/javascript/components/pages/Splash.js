import React, { Component } from "react"
import PokeLogo from '../../../assets/images/PokeLogo2.1.png'
import ReactHowler from 'react-howler'
//import Theme from './TitleScreen.mp3'


class Splash extends Component{
render() {
    return(
        <>
        <div className = "splash">
          <div className= "square">
              <a href="/home"><img src= {PokeLogo} alt="pokedeckLogo" className= "logo-splash" /></a>
          </div>

          <div className= "orangeSquare">
            <p className="splashInstructions">(Click Logo to Begin)</p>
          </div>
          <ReactHowler
          src='./pokedeck_capstone_app/app/javascript/components/pages/TitleScreen.mp3'
          playing={true}
          />
        </div>
        </>
    )
    }
}
export default Splash
