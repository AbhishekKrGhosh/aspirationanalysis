import React from "react";
import './style.css'
import Roadmap from "./roadmap/Roadmap";
import Courses from "./courses/Courses";
import Quiz from "./quiz/Quiz";
import Game from "./game/Game";
import Memorize from "./memorize/Memorize";
import Community from "./community/Community";
import WebgiViewer from "./3D/WebgiViewer";

function Content({dark, threeD}){
    return(
        <div className="content" style={dark?{background: '#0E181E', color:'white'}:{background:'white', color:'black'}} >
            <div className="upspace" >
            </div>
            <div className="contents">
                <Roadmap dark={dark}/>
                <Courses dark={dark}/>
                <Quiz dark={dark}/>
                <Game dark={dark}/>
                <Memorize dark={dark}/>
                <Community dark={dark}/>
                {threeD?<WebgiViewer/>:<></>}

            </div>
        </div>
)
}

export default Content