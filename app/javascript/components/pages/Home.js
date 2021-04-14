
import React, { Component } from "react"
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'


class Home extends Component{
render() {
    const {
        logged_in,
        sign_in_route,
        sign_out_route,
        new_user_route
      } = this.props

    return(
        <>
        {/* <Header 
        logged_in={logged_in}
        sign_in_route={sign_in_route}
        sign_out_route={sign_out_route}
        new_user_route={new_user_route}

        /> */}
            <h3>This is the Home page </h3>
            {/* <Footer />  */}
        </>   
    )
    }
}
export default Home