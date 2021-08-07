import React, { useState } from 'react'
import styles from "./Projects.css"
import counterimg from "./screenshots/Screenshot (6).png"
import bgimg from "./screenshots/Screenshot (7).png"
import pomoimg from "./screenshots/Screenshot (9).png"
import slider from "./screenshots/Screenshot (8).png"
import gyam from "./screenshots/Screenshot (18).png"

import reactweb from "./screenshots/Screenshot (2).png"



import { Link } from 'react-router-dom';



const data = [
    {
        nam: "Rock Paper Scissor game",
        img: gyam,
        link: "https://happy-mcnulty-514bd7.netlify.app/"
    },
    {
        nam: "Slider",
        img: slider,
        link: "https://quizzical-shirley-8b33eb.netlify.app/"
    },


    {
        nam: "Background color changer",
        img: bgimg,
        link: "https://serene-goldwasser-96c9b0.netlify.app/"
    },
    {
        nam: "Pomodoro technique",
        img: pomoimg,
        link: "https://eloquent-pare-7c4b43.netlify.app/"
    },

    {
        nam: "Counter",
        img: counterimg,
        link: "https://confident-brown-299fa9.netlify.app/"

    }
]


function Projects() {

    const [dta, setDta] = useState(0)

    const { nam, img, link, pp } = data[dta]

    const whatif = (info) => {
        if (info > data.length - 1) {
            return 0
        }
        if (info < 0) {
            return data.length - 1
        }
        return info
    }
    const incre = () => {
        setDta((index) => {
            let newIndex = index + 1
            return whatif(newIndex)
        })
    }

    const decre = () => {
        setDta((index) => {
            let newIndex = index - 1
            return whatif(newIndex)
        })
    }
    return (
        <div className="p_div">
            <h1 className="op">Click to see my projects live.</h1>
            <div className="border">
                <div className="p_content">
                    <a href={link} target="_blank" className="p_link">
                        <img className="p_img" src={img} />
                        <h1 className="p_h op">{nam}</h1>
                        <p>{pp}</p>
                    </a>

                </div>
                <div className="p_btns">
                    <button className="project_btns" onClick={decre}>Previous</button>
                    <button className="project_btns" onClick={incre}>Next</button>


                </div>
            </div>
        </div>
    )
}

export default Projects
