import React from "react";

import SideNav from "./Pages/Side-Nav/SideNav.page";
import Home from "./Pages/Home/Home.page";
import About from "./Pages/About/About.page";
import Blog from "./Pages/Blog/Blog.page";
import Projects from "./Pages/Projects/Projects.page";
import Contact from "./Pages/Contact/Contact.page";

import { Route, Switch, useLocation } from "react-router-dom";
import { Container } from "./App.styles";
import { useTransition, animated } from "react-spring";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 1 },
    enter: { opacity: 1, transform: "perspective(600px) rotateX(0deg)" },
    leave: { opacity: 0, transform: "perspective(600px) rotateX(180deg)" }
  });
  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Container>
        <SideNav />
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Container>
    </animated.div>
  ));
}

export default App;
