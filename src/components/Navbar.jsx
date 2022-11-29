import React from 'react'
import ReactDOM from 'react-dom/client'
import LogoPicture from '../assets/Group.png'

 function Navbar () {
    return (
        <nav>
            <img className = 'logo' src = {LogoPicture}></img>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}


export default Navbar 

