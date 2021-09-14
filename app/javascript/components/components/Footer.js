import React, { Component } from "react"
import { NavLink } from 'react-router-dom'




class Footer extends Component{
render() {
    return(
        <>
        <div className = "center">
            <h2>&copy; Squirtle Squad </h2> 
            <NavLink to="/aboutus" className="devise-text"> About us</NavLink>
        </div>
        </>
        
    )
    }
}
export default Footer