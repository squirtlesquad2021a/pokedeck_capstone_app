import React, { Component } from "react"
import PokeLogo from '../../../assets/images/PokeLogo2.1.png'
import ReactHowler from 'react-howler'
//import Theme from './TitleScreen.mp3'


class Splash extends Component{
  constructor (props) {
      super(props)

      this.state = {
        initialized: false,
        playing: false
      }
      this.handlePlay = this.handlePlay.bind(this)
      this.handlePause = this.handlePause.bind(this)
  }
    handlePlay () {
      this.setState({ playing: true })
    }

     handlePause () {
       this.setState({ playing: false })
     }

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
        </div>
        <div>
          <ReactHowler
            src='https://fi.zophar.net/soundfiles/gameboy-gbs/pokemon-red/01%20Opening%20%28part%201%29.mp3'
            playing={this.state.playing}
          />
          <button onClick={ this.handlePlay }>Play</button>
          <button onClick={ this.handlePause }>Pause</button>
        </div>
        </>
    )
  }
}
export default Splash
