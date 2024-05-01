import React, { useState } from "react";
import logoLight from '../../assests/logo-light.png'
import logoDark from '../../assests/logo-dark.png'
import profile from '../../assests/profile.png'
import './style.css'

function Navbar({setDark, dark, threeD, setThreeD}){
    const [login, setLogin] = useState(false)
    const handleML = () => {
        
    }
    const handle3D = () => {
        setThreeD(!threeD)
    }
    const handleDark = () => {
        setDark(!dark)
    }
    return(
        <div className="navbar" style={dark?{background:'#060709'}:{}}>
            <div className="logo">
                {dark?<img src={logoDark}/>:<img src={logoLight}/>}
                <h1 style={dark?{color:'white'}:{color:'black'}}>AspirationAnalysis</h1>
            </div>
            <div className="top-buttons">
                <div className="merge-buttons" style={login?{}:{marginLeft:'50vw'}}>
                    <button className="ml">ML</button>
                    <button onClick={handle3D} style={threeD?{background:'grey'}:{background:'rgb(222, 222, 222)'}}>3D</button>
                    <button className="dark" style={dark?{background:'grey'}:{background:'rgb(222, 222, 222)'}} onClick={handleDark}>{dark?'light':'dark'}</button>
                </div>
            </div>
            {login?<div className="profile">
<img src={profile} alt="profile"/></div>:<></>}
        </div>
)
}

export default Navbar