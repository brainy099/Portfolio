import React, { useContext } from "react";

import SideNav from "./Pages/Side-Nav/SideNav.page";
import Home from "./Pages/Home/Home.page";
import About from "./Pages/About/About.page";
import Blog from "./Pages/Blog/Blog.page";
import Projects from "./Pages/Projects/Projects.page";
import Contact from "./Pages/Contact/Contact.page";

import { Route, Switch, __RouterContext } from "react-router-dom";
import { Container, BodyContainer } from "./App.styles";
import { useTransition, animated } from "react-spring";

function App() {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 1 },
    enter: { opacity: 1, transform: "rotateX(0deg)" },
    leave: { opacity: 1, transform: "rotateX(360deg)" }
  });
  return (
    <Container>
      <SideNav />
      <BodyContainer>
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </animated.div>
        ))}
      </BodyContainer>
    </Container>
  );
}

export default App;
