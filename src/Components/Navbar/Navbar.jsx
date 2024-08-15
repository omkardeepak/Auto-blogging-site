import React from "react"
import {Link} from "react-router-dom"
import "./Navbar.css"
function Navbar(){
    return(
        <div className="navbar"> 
          <Link className="btn btn-outline-success" type="button" to="/"> 🏠︎ Home</Link>
          <Link className="btn btn-outline-success" type="button" to="/newblog"> 📝 New blog</Link>
          <Link className="btn btn-outline-success" type="button" to="/signup"> 🪪 Signup</Link>
          </div>
    )
}
 export default Navbar