import React from "react";

import HomeNav from "./HomeComponents/HomeNav";
import HomeHeader from "./HomeComponents/HomeHeader";
import HomeThreeColumns from "./HomeComponents/HomeThreeColumns";
import HomeSimpleSteps from "./HomeComponents/HomeSimpleSteps";
import HomeAboutUs from "./HomeComponents/HomeAboutUs";
import HomeWhoWeHelp from "./HomeComponents/HomeWhoWeHelp";
import HomeContact from "./HomeComponents/HomeContact";
import HomeFooter from "./HomeComponents/HomeFooter";


const Home = props => {
    return(
        <div>
            <HomeNav />
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSimpleSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContact/>
            <HomeFooter/>
        </div>
    )
}

export default Home