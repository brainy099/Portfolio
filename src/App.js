import React from "react";
import SideNav from "./Components/Side-Nav/SideNav.component";
import About from "./Pages/About/About.pages";
import Home from "./Pages/Home/Home.pages";
import { Container } from "./App.styles";

function App() {
  return (
    <Container>
      <SideNav />
      <Home />
    </Container>
  );
}

export default App;
