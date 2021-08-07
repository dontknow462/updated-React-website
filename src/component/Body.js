import React from 'react'
import Styles from "./Body.css"
import { Link } from 'react-router-dom';



function Body() {
    return (
        <div className="home_container">
            <div className="body_content">
                <h1 className="h_f">Hi, I'm <span>Roshan</span>.</h1>
                <h1 className="h_s">I like to build websites.</h1>
            </div>
            <div>
                <a href="https://raw.githubusercontent.com/dontknow462/cv/main/cvNNEW.png" target="_blank" className="cv">
                    Portifolio
                </a>
            </div>
        </div>
    )
}

export default Body
