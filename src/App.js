import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";

function App() {
  return (
    <Router>
      <nav className="navbar">
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
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
