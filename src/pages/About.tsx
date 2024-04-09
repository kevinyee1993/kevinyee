import React from 'react';
import { Link } from "react-router-dom";

export const About = () => {
    return (
        <div>
            I am the about page!
            <Link to='/'>Go to home page!</Link>
        </div>
    )
}