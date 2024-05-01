import React from "react";
import './style.css'

function ContentInfo({dark, text, info}){
    return(
        <div className="content-info" style={dark?{color:'white'}:{color:'black'}}>
            <h1>{text}</h1>
            <p>{info}</p>
            
        </div>
)
}

export default ContentInfo