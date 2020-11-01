import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import { createContext, useState } from 'react';
import Navbar from './Components/Home/Navbar/Navbar';
import Contact from './Components/Contact/Contact';

export const Nav = createContext();


function App() {

  const [active, setActive] = useState('home');

  return (
    <Nav.Provider value={[active, setActive]}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            <Projects />
            <Blogs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Nav.Provider>
  );
}

export default App;
