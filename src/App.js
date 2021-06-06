import React from "react";
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import Home from "./pages/Home/home.js";
import About from "./pages/About/about";
import Skill from "./pages/Skill/skills";
import Final from "./pages/Projects/final.js";
import Contact from "./pages/Contact/contact.js";
import Loader from "./components/Loader/loader.js";

function App() {
  return (
    <>
    <Loader />
    <Router>
    <div className="App">
     
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/skills" component={Skill}/>
      <Route exact path="/projects" component={Final}/>
      <Route exact path="/contact" component={Contact}/>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
