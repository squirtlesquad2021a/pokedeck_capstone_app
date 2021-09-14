import React, { Component } from "react"
import mockCards from './mockData.js'
import mockBinders from './mockBinderSleeves.js'
import mockUsers from './mockUsers.js'
import mockRankings from'./mockRankings'
import AboutUs from './pages/AboutUs'
import CardShow from './pages/CardShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Rankings from './pages/Rankings'
import Splash from './pages/Splash'
import BinderShow from './pages/BinderShow'
import UserCardIndex from './pages/UserCardIndex'
import mockUserRanking from './mockUserRanking.js'
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
      cards: [],
      bindersleeves: [],
      // users: [],
      rankings: [],
      isUserEligible: false,
      userRank: {}
    }

  }

  componentDidMount(){
    if (this.props.current_user) {
      this.dailyCardEligibilityCheck(this.props.current_user.id)
      this.userStats()
    }
    this.binderIndex()
    this.cardIndex()
    this.rankings()
  }

  binderIndex = () => {
    fetch("/binders")
    .then(response => {
      return response.json()
    })
    .then(bindersleevesArray => {
      this.setState({ bindersleeves: bindersleevesArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  dailyCardEligibilityCheck = (user_id) => {
    fetch(`/eligibility_check/`)
    .then(response => {
      return response.json()
    })
    .then(isEligible => {
      console.log('dailyCardEligibilityCheck', isEligible)
      this.setState({ isUserEligible: isEligible })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  claimDailyCard = (user_id) => {
    fetch(`/dailycard/`, {
      method: "POST"
    })
    .then(response => {
      console.log('response', response)
      if(response.status === 422){
        alert("Something is wrong with your submission.")
      }
      return response.json()
    })
    .then(payload => {
      console.log('payload', payload)
      this.setState({ isUserEligible: false })
      this.binderIndex()
      this.rankings()
      this.userStats()
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

  claimBoosterPack = (user_id) => {
    fetch(`/boosterpack/`, {
      method: "POST"
    })
    .then(response => {
      console.log('response', response)
      if(response.status === 422){
        alert("Something is wrong with your submission.")
      }
      return response.json()
    })
    .then(payload => {
      console.log('payload', payload)
      this.binderIndex()
      this.rankings()
      this.userStats()
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

  cardIndex = () => {
    fetch("/cards")
    .then(response => {
      return response.json()
    })
    .then(cardsArray => {
      this.setState({ cards: cardsArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  rankings = () => {
    fetch("/rankings")
    .then(response => {
      return response.json()
    })
    .then(rankingsArray => {
      this.setState({ rankings: rankingsArray })
    })
    .catch(errors => {
      console.log("rankings errors:", errors)
    })
  }

  userStats = () => {
    fetch("/userstatistics/")
    .then(response => {
      console.log('response', response)
      return response.json()
    })
    .then(userStatsObj => {
      console.log('userStatsObj', userStatsObj)
      this.setState({ userRank: userStatsObj })
    })
    .catch(errors => {
      console.log("user stats errors:", errors)
    })
  }

  updateBinder = (editedBinder, binder_id) => {
    console.log(editedBinder)
    fetch(`/binders/${binder_id}`, {
      body: JSON.stringify(editedBinder),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 422){
        alert("Something is wrong with your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.binderIndex()
    })
    .catch(errors => {
      console.log("update errors:", errors)
    })
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
        {
        !( window.location.pathname === '/') &&

          <Header logged_in={logged_in}
            sign_in_route={sign_in_route}
            sign_out_route={sign_out_route}
            new_user_route={new_user_route}
            current_user={current_user}
            isUserEligible={this.state.isUserEligible}
            bindersleeves={this.state.bindersleeves}
            claimDailyCard={this.claimDailyCard}
            claimBoosterPack={this.claimBoosterPack}
            userRank={this.state.userRank}
           className = 'header'/>
         }
        <Switch>
          <Route exact path = "/" component={ Splash } />
          <Route path="/home" render={ (props) => <Home cards={ this.state.cards } /> } />
          <Route path = "/aboutus" component={ AboutUs } />
          <Route path = "/leaderboard" render= { (props)=> <Rankings rankings={ this.state.rankings }
          /> } />
          <Route path="/cardshow/:id" render = {(props) => {
            const id = +props.match.params.id
            const card = this.state.cards.find(card => card.id === id)
            return (<CardShow card={card}/>)}
            } />

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
            const binder = this.state.bindersleeves.find(binder => binder.id === id)
            return (<BinderShow binder={binder} updateBinder={ this.updateBinder }/>)}
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
