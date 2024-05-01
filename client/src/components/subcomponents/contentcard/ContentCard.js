import React from "react";
import './style.css'

function ContentCard({pic}){
    return(
        <div className="contentcard">
            <img className="contentimg" src={pic} alt="pic"/>
        </div>
)
}

export default ContentCard