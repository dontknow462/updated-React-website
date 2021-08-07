import React from 'react'
import Body from "../component/Body"
import About from "../component/About"
import Projects from "../component/Projects"
import Contact from "../component/Contact"


function Home() {
    return (
        <div>
            <Body/>
            <Projects/>
            <About/>
            
            <Contact/>
        </div>
    )
}

export default Home
