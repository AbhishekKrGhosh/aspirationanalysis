import React from "react";
import DashboardCard from "../../components/subcomponents/dashboardcard/DashboardCard";
import './style.css'

const conte = [["https://fullstackstation.com/wp-content/uploads/2016/01/react-js-la-gi.jpg","REACT"],
["https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA","EXPRESS"],
["https://www.informatec.com/sites/default/files/styles/medium/public/image-seperator/machine-learning-separator-1.jpg?itok=ycRLJQV9","ML"],
["https://cdn.mos.cms.futurecdn.net/CBHUAsfrHYAci3MTWZBsgN-1200-80.png","PYTHON"],
["https://fullstackstation.com/wp-content/uploads/2016/01/react-js-la-gi.jpg","REACT"],
["https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA","EXPRESS"],
["https://www.informatec.com/sites/default/files/styles/medium/public/image-seperator/machine-learning-separator-1.jpg?itok=ycRLJQV9","ML"],
["https://cdn.mos.cms.futurecdn.net/CBHUAsfrHYAci3MTWZBsgN-1200-80.png","PYTHON"]]

function Home({dark}){
    return(
        <div className="home">
            <div className="continue">
                <h2>continue</h2>
                <div className="continuecontent">
                    {conte.map((item, id)=>(<DashboardCard key={id} pic={item[0]} text={item[1]} imgheight={'100px'} cardheight={'150px'}/> ))}
                </div>
            </div>
            <div className="roadmap">
            <h2>Roadmap</h2>
                <div className="continuecontent">
                
                    {conte.map((item, id)=>(<DashboardCard key={id} pic={item[0]} text={item[1]}/>))}
                
                </div>
            </div>
            <div className="courses">
            <h2>Courses</h2>
                <div className="continuecontent">
                
                    {conte.map((item, id)=>(<DashboardCard key={id} pic={item[0]} text={item[1]}/>))}
                
                </div>
                </div>
        </div>
)
}

export default Home