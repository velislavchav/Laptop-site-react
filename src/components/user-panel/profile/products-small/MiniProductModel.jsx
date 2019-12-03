import React from "react";
import "./styles.css"

const MiniProduct = (props) => {
    const { title, CPU, GPU, RAM, price, imageUrl } = props;
    return (
        <div className="miniProduct">
            <div className="miniImageUserProducts">
                <img src={imageUrl} alt={title} />
            </div>
            <h4>{title}</h4>
            <ul>
                <li><b>CPU:</b> {CPU} </li>
                <li><b>GPU:</b> {GPU}</li>
                <li><b>RAM:</b> {RAM}</li>
            </ul>
            <span> Price: {price} $ </span>
        </div>
    )
}

export default MiniProduct;