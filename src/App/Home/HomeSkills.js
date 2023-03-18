import React from "react";
import SmallCard from "../Components/SmallCard/Small.Card";

function HomeSkills(){
    return (
        <div>
            <h3>Featured Skills</h3>
            <h4>Development Skills</h4>
            <h4>Professional Skills</h4>
            <div>
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
            <p>Select a skill to be taken to the skill page</p>
        </div>
    )
}

export default HomeSkills;