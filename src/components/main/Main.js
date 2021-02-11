import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../main/pages/Home";
import About from "../main/pages/About";
import Projects from "../main/pages/Projects";
import Navbar from "../header/Navbar";

const Main = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
