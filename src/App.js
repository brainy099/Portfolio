import React from "react";
import SideNav from "./Pages/Side-Nav/SideNav.page";
import About from "./Pages/About/About.page";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home.page";
import { Container } from "./App.styles";

function App() {
  return (
    <Container>
      <SideNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Container>
  );
}

export default App;
