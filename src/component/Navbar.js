import React, { useState } from 'react'
import styles from "./Navbar.css"
import { Link } from 'react-router-dom';
import {FaBars} from "react-icons/fa"
import {VscChromeClose} from "react-icons/vsc"

function Navbar() {
   
    const[click, setClick]=useState(false)
    const handleClick =()=> setClick(!click)
   
    const closeMenu=()=>setClick(false)
    return (
        <div className="navbar_container">
            <div className='menu-icon'  onClick={handleClick}>
               
               {click? <VscChromeClose className="bar"/>: <FaBars className="bar"/>}
               
            </div>
            <div className="logo_container" onClick={closeMenu}>
                <Link className="linkz_logo" to="/">
                    <h1 className="logo">Roshan</h1>
                </Link>
            </div>
            <div  className={click?"nav_links active":"nav_links"}>
                <Link onClick={closeMenu} className="nav_link" to="/">
                    Home
                        </Link>

                <Link onClick={closeMenu} className="nav_link" to="/Projects">
                    Projects
                        </Link>
                <Link onClick={closeMenu} className="nav_link" to="/About">
                    About me
                        </Link>
                <Link onClick={closeMenu} className="nav_link" to="/Contact">
                    Contact me
                        </Link>

            </div>

        </div>
    )
}

export default Navbar
