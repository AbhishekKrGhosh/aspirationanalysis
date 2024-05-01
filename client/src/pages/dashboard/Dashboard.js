import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../dashboardcomponents/sidebar/Sidebar";
import Main from "../../dashboardcomponents/main/Main";

function Dashboard({dark, setDark, threeD, setThreeD}){
    return(
        <div>
            <Navbar setDark={setDark} dark={dark} threeD={threeD} setThreeD={setThreeD}/>
            <div className="body">
                <Sidebar dark={dark}/>
                <Main dark={dark}/>
            </div>
        </div>
)
}

export default Dashboard