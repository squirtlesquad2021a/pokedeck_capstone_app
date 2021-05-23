import React, { Component } from "react"
import PokeLogo from '../../../assets/images/PokeLogo2.1.png'
import ReactHowler from 'react-howler'
//import Theme from './TitleScreen.mp3'
import Squad from '../../../assets/images/squad.png'
import Trophy from '../../../assets/images/trophy.png'
import Footer from "../components/Footer"


class Splash extends Component{
  constructor (props) {
      super(props)

      this.state = {
        initialized: false,
        playing: false,
        volume: 0.1
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
            volume={this.state.volume}
          />
          <div className="playpause" >
            <button className= "button" onClick={ this.handlePlay }>Play</button>
            <button className= "button" onClick={ this.handlePause }>Pause</button>
          </div>

          <div className='volume'>
            <label>
              Volume:
              <span className='slider-container'>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='.05'
                  value={this.state.volume}
                  onChange={e => this.setState({ volume: parseFloat(e.target.value) })}
                />
              </span>
              {this.state.volume.toFixed(2)}
            </label>
          </div>

          <div className= "orangeSquare">
            <span className="splashInstructions">(Click Logo to Begin)</span>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="center-splash">
          <h1>Collect Cards Digitally</h1>
          <h3>Leave your physical cards at home.</h3>
          <img className="splash-image-1" src="https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixid=MnwxMjA3fDB8MHxwaG90[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
          <br></br>
          <br></br>
          <h1>Climb Up the Ranks</h1>
          <h3>Collect the highest valued deck to show off to your friends! </h3>
          <img className="splash-image-1" src={ Trophy } />
          <br></br>
          <br></br>
          <h1>Check In Daily For New Cards</h1>
          <h3>new card every 24hours</h3>
          <img className="splash-image-1" src="https://images.unsplash.com/photo-1613771404738-65d22f979710?ixid=MnwxMjA3fDB8MHxwaG90[…]fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"/>
          <br></br>
          <br></br>
          <h1>Gotta Collect Them All!</h1>
          <img className="splash-image-1" src={ Squad } />
          <br></br>
          <br></br>
          <Footer />
        </div>
        </>
    )
  }
}
export default Splash
