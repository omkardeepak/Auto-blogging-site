import React from "react";
import ReactDOM from 'react-dom'
import Home from './Components/Home/Home.jsx'
import Newblog from './Components/Newblog/Newblog.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Route,Routes } from "react-router-dom";
function App(){
    return(
        <>
        <Navbar/>
        <div className="route"> 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/newblog" element={<Newblog/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
        </div>
        </>
    )
}
export  default App;