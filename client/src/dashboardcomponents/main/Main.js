import React from "react";
import './style.css'
import Home from "../home/Home";

function Main({dark}){
    return(
        <div className="main" style={dark?{background:'black', color:'white'}:{background:'white', color:'black'}}>
            <Home dark={dark}/>
        </div>
)
}

export default Main