import React from "react";
import {Link} from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return(
        <div className="NotFound">
            <h1 className="NotFound-title">Oops! Page is not here</h1>

            <Link to="/" className="NotFound-link">Back to Home</Link>
        </div>
    )
}

export default NotFound;