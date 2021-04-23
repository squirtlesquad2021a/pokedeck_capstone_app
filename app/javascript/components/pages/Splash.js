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
          <ReactHowler
            src='https://fi.zophar.net/soundfiles/gameboy-gbs/pokemon-red/01%20Opening%20%28part%201%29.mp3'
            playing={this.state.playing}
          />
          <div className="playpause" >
            <button className= "button" onClick={ this.handlePlay }>Play</button>
            <button className= "button" onClick={ this.handlePause }>Pause</button>
          </div>
          <div className= "orangeSquare">
            <p className="splashInstructions">(Click Logo to Begin)</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <h1>Collect Cards Digitally</h1>
        <img src="https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixid=MnwxMjA3fDB8MHxwaG90[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"/>
        <br></br>
        <br></br>
        <h1>Climb Up the Ranks</h1>
        <br></br>
        <br></br>
        <h1>Check In Daily For New Cards</h1>
        <img src="https://p.kindpng.com/picc/s/192-1923263_pokemon-cards-png-pokemon-cards-transparent-png-png.png" />
        <br></br>
        <br></br>
        </>
    )
  }
}
export default Splash
