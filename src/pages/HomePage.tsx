import React from 'react';
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div>
            hello!! i am the home page
            <Link to='/about'>Go to about!</Link>
        </div>
    )
}