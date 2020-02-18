import React from "react";
import logo from "./logo.svg";

function Home() {
  return (
    <div className="App">
      <h1>Home</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        A future webpage using <span className="hl">React.js</span> as the
        driving force to power it.
      </p>
      <a
        className="App-link"
        href="https://github.com/emiliaguzik/SP"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div>
  );
}

export default Home;
