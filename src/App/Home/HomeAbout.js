import React from "react";
import { Link } from "react-router-dom";

function HomeAbout() {
    return (
        <div>
            <h3>About</h3>
            <img src="#" alt="#" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius aut corporis amet nesciunt facilis eos similique consequatur asperiores deleniti enim, fugiat aperiam voluptates, nobis repellat voluptatum neque quae doloribus?</p>
            <Link to={`/about`} >Learn More</Link>
        </div>
    )
}

export default HomeAbout;