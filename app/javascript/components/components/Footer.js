import React, { Component } from "react"
import { NavLink } from 'react-router-dom'




class Footer extends Component{
render() {
    return(
        <>
        <div className = "center">
            <h6>&copy; Squirtle Squad </h6> 
            <NavLink to="/aboutus" className="devise-text"> About us</NavLink>
        </div>
        </>
        
    )
    }
}
export default Footer