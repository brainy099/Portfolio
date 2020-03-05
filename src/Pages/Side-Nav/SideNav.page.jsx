import React from "react";
import { SideNavContainer } from "./SideNav.styles";
import NavTab from "../../Components/Nav-Tab/NavTab.component";

const SideNav = () => {
  return (
    <SideNavContainer>
      <NavTab to="/" name="099" />
      <NavTab to="/about" name="About" />
      <NavTab to="/blog" name="Blog" />
      <NavTab to="/projects" name="Projects" />
      <NavTab to="/contact" name="Contact" />
    </SideNavContainer>
  );
};

export default SideNav;
