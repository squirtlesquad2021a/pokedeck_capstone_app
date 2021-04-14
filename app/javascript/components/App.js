import React, { Component } from "react"
import mockCards from './mockData.js'
import mockBinders from './mockBinderSleeves.js'
import mockUsers from './mockUsers.js'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import CardShow from './pages/CardShow'
import ClaimBooster from './pages/ClaimBooster'
import ClaimCard from './pages/ClaimCard'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Rankings from './pages/Rankings'
import Splash from './pages/Splash'
import UserCardIndex from './pages/UserCardIndex'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cards: mockCards,
      bindersleeves: mockBinders,
      users: mockUsers
    }
  }


  render () {
    return (
      <>
      <Header />
      <Router>
        <Switch>
          <Route exact path = "/" component={ Splash } />
          <Route path = "/home" component={ Home } />
          <Route path = "/aboutus" component={ AboutUs } />
          <Route path = "/rankings" component={ Rankings } />
          <Route path= "/cardshow/:id" component={ CardShow } />
          <Route path= "/claimcard" component={ ClaimCard } />
          <Route path= "/claimbooster" component={ ClaimBooster } />
          <Route path= "/usercardindex" component={ UserCardIndex } />
          <Route component={ NotFound }/>
        </Switch>
      </Router>
      <Footer />
      </>
    );
  }
}

export default App
