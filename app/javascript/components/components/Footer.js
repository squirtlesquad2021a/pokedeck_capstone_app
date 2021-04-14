import React, { Component } from "react"
import { NavLink } from 'react-router-dom'



class Footer extends Component{
render() {
    return(
        <div>
            <h7>&copy; Squirtle Squad </h7> 
            <NavLink to="/aboutus"> About us</NavLink>
        </div>
        
    )
    }
}
export default Footer