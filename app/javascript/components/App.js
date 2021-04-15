import React, { Component } from "react"
import mockCards from './mockData.js'
import mockBinders from './mockBinderSleeves.js'
import mockUsers from './mockUsers.js'
import AboutUs from './pages/AboutUs'
import CardShow from './pages/CardShow'
import ClaimBooster from './pages/ClaimBooster'
import ClaimCard from './pages/ClaimCard'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Rankings from './pages/Rankings'
import Splash from './pages/Splash'
import BinderShow from './pages/BinderShow'
import UserCardIndex from './pages/UserCardIndex'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

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
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      new_user_route,
      current_user,
    } = this.props
    const { cards } = this.state
    return (
      <>
      <Router>
        {/* {
        !( window.location.pathname === '/') &&  */}
        
          <Header logged_in={logged_in}
            sign_in_route={sign_in_route}
            sign_out_route={sign_out_route}
            new_user_route={new_user_route}/>
        {/* } */}
        <Switch>
          <Route exact path = "/" component={ Splash } />
          <Route path="/home" render={ (props) => <Home cards={ this.state.cards } /> } />
          <Route path = "/aboutus" component={ AboutUs } />
          <Route path = "/rankings" component={ Rankings } />
          <Route path="/cardshow/:id" render = {(props) => {
            const id = +props.match.params.id
            const card = this.state.cards.find(card => card.id === id)
            return (<CardShow card={card}/>)}
            } />
          <Route path= "/claimcard" component={ ClaimCard } />
          <Route path= "/claimbooster" component={ ClaimBooster } />

          <Route
              path="/usercardindex"
              render={ (props) => {
                  const usersBinders = this.state.bindersleeves.filter(binder => {
                    return binder.user_id === current_user.id
                  })
                  return <UserCardIndex usersBinders={usersBinders} />
              }}
            />
          <Route path="/bindershow/:id" render = {(props) => {
            const id = +props.match.params.id
            const sleeve = this.state.usersBinders.find(sleeve => sleeve.id === id)
            return (<BinderShow sleeve={sleeve}/>)}
            } />
          <Route component={ NotFound }/>
        </Switch>
        
        {/* // !( window.location.pathname === '/') &&  */}
        <Footer />
        
      </Router>
      </>
    );
  }
}

export default App
