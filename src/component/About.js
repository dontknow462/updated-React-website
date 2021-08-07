import React from 'react'
import styles from "./About.css"
import { Link } from 'react-router-dom';
import { AiFillGithub,AiFillCodepenCircle,AiFillLinkedin } from 'react-icons/ai';

function about() {
    return (
        <div className="dib">
            <div className="a_container">
                <h1 className="a_h a_hf "> Hi, again, I am Roshan. I work with Javascript and React which I have been learning for 3 and 1 years, respectively, but  I am open to learn other new technologies.  </h1>
                <h1 className="a_h a_hs "> I used to code years ago because it was my hobby but now I want to do it as a job. </h1>
               
            </div>
          <div className="logo__container">
          <a  href="https://github.com/dontknow462" target="_blank" className="a_l"><AiFillGithub/></a>
          
          <a href="https://codepen.io/dontknow462" target="_blank" className="a_l"><AiFillCodepenCircle/></a>
          
          <a href="https://www.linkedin.com/in/roshan-bhusal-a517621b4/" target="_blank" className="a_l"><AiFillLinkedin/></a>

          </div>
        </div>
    )
}

export default about
