import React, { Fragment } from "react";
import "./deleteStyles.css";

const DeleteConfirmation = (id) => {
    return (
        <Fragment>
            <img id="backgroundDeleteConfirmation" alt="background" src="http://eskipaper.com/images/free-dark-wallpaper-1.jpg" />
            <div id="deleteConfirmationDiv">
                <h3>Are you sure you want to delete this product?</h3>
                <div className="buttons-deleteConfirmation">
                    <button>YES</button>
                    <button>NO</button>
                </div>
            </div>
        </Fragment>
    )
}

export default DeleteConfirmation;