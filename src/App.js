import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import logo from "./logo.svg";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <img src={logo} className="logo-nav" alt="logo" />
        <ul>
          <li>
            <Link to="/SP" className="react-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/SP/about" className="react-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/SP/projects" className="react-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/SP/blog" className="react-link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/SP/contact" className="react-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={450} classNames="fade">
              <Switch location={location}>
                <Route exact path="/SP" component={Home} />
                <Route exact path="/SP/about" component={About} />
                <Route exact path="/SP/projects" component={Projects} />
                <Route exact path="/SP/blog" component={Blog} />
                <Route exact path="/SP/contact" component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}

export default App;
