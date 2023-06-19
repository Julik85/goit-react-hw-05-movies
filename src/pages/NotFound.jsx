import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <p>
            This page does not exist. Please, go to <Link to="/">Home</Link>
            </p>
        </div>
    )
}

export default NotFound;