import React from "react";
import './style.css'

function DashboardCard({pic, text, imgheight, cardheight}){
    return(
        <div className="dashboardcard" style={{height:cardheight}}>
            <img src={pic} alt={text} style={{height:imgheight}}/>
            <h1>{text}</h1>
        </div>
)
}

export default DashboardCard