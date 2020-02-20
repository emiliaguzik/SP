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
            <Link to="/" className="react-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="react-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="react-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blog" className="react-link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="react-link">
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
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}

export default App;
