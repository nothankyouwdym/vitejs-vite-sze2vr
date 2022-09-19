import React, { Component } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

class App extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  }
}

export default App