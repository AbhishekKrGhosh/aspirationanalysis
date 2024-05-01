import React from "react";
import './style.css'
import { Chat, EditRoad, Games, GraphicEq, Home, LibraryBooks, Logout, LogoutRounded, Memory, Quiz } from "@mui/icons-material";

function Sidebar({dark}){
    return(
        <div className="sidebar" style={dark?{background:'black', color:'white'}:{background:'white', color:'black'}}>
            <div className="extra"/>
            <Home style={{fontSize:'50px'}}/>
            <EditRoad style={{fontSize:'50px'}}/>
            <LibraryBooks style={{fontSize:'50px'}}/>
            <Quiz style={{fontSize:'50px'}}/>
            <Games style={{fontSize:'50px'}}/>
            <Memory style={{fontSize:'50px'}}/>
            <Chat style={{fontSize:'50px'}}/>
            <GraphicEq style={{fontSize:'50px'}}/>
            <Logout style={{fontSize:'50px', marginTop:'auto', marginBottom:'20px'}}/>
        </div>
)
}

export default Sidebar