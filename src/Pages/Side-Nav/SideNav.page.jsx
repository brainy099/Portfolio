import React from "react";
import { SideNavContainer } from "./SideNav.styles";
import NavTab from "../../Components/Nav-Tab/NavTab.component";

const SideNav = () => {
  const checkActive = path => {
    return window.location.pathname === path ? true : false;
  };
  return (
    <SideNavContainer>
      <h1 style={{ textAlign: "center" }}>UNDER CONSTRUCTION</h1>
      <NavTab to="/" name="099" active={checkActive("/")} />
      <NavTab to="/about" name="About" active={checkActive("/about")} />
      <NavTab to="/blog" name="Blog" active={checkActive("/blog")} />
      <NavTab
        to="/projects"
        name="Projects"
        active={checkActive("/projects")}
      />
      <NavTab to="/contact" name="Contact" active={checkActive("/contact")} />
    </SideNavContainer>
  );
};

export default SideNav;
