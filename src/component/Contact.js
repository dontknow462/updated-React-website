import React from 'react'
import styles from "./Contact.css";
import { AiOutlineMail,AiFillGithub, AiFillCodepenCircle, AiFillLinkedin,AiOutlineMobile } from 'react-icons/ai';


function Contact() {
    return (
        <div className="contact_container">
            <div className="contact_logos">
            <a href="https://github.com/dontknow462" target="_blank" className="a_l_"><AiFillGithub className="con_ic"/></a>
          
          <a href="https://codepen.io/dontknow462" target="_blank" className="a_l_"><AiFillCodepenCircle className="con_ic"/></a>
          
          <a href="https://www.linkedin.com/in/roshan-bhusal-a517621b4/" target="_blank" className="a_l_"><AiFillLinkedin className="con_ic"/></a>

                <a href="mailto:rosan_wanted@yahoo.com" className="a_l_"><AiOutlineMail className="con_ic"/></a>
                <a href="tel:07311860088" className="a_l_"><AiOutlineMobile className="con_ic"/></a>

                <h1 className="contact_ph"> Ph:07311860088</h1>

            </div>
        </div>
    )
}

export default Contact
