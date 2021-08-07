import React from 'react'
import Navbar from "./component/Navbar"
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Body from "./component/Body"
import About from "./component/About"
import Projects from "./component/Projects"
import Contact from "./component/Contact"
import Home from "./Allpages/Home"
import Abouts from "./Allpages/Abouts"

function App() {
  return (
    
     
      <Router>
      <Navbar />
        <Switch>
          <Route  path='/' exact component={Home} />
          <Route  path='/About' exact component={About} />
          <Route  path='/Projects'  component={Projects} />
          <Route path='/Contact' component={Contact} />
        </Switch>
      </Router>
   
  );
}

export default App;