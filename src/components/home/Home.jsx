import React from "react";
import "./stylesHome.css"
import image from "./wallpaper.jpg"

const Home = () => {
    return (
        <div className="image-container">
            <img id="wallpaper" alt="wallpaper" src={image} />
            <div id="wallpaper-title">
                <h1> User's laptops <br />management system </h1>
            </div>

        </div>
    );
}

export default Home
