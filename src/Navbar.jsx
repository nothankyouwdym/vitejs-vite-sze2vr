import React, { Component } from "react"
import { Link } from "react-router-dom"

class Navbar extends Component{
  render(){
    return(
      <nav>
        <Link to="/"><span>Home</span></Link>
        <Link to="/"><span>About</span></Link>
      </nav>
    )
  }
}

export default Navbar