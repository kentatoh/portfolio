import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Content1 from "./components/pages/project/Content1";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" exact component={Project} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/project/content1" exact component={Content1} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
