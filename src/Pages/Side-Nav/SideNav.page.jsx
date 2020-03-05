import React from "react";
import { SideNavContainer } from "./SideNav.styles";
import NavTab from "../../Components/Nav-Tab/NavTab.component";

const SideNav = () => {
  return (
    <SideNavContainer>
      <NavTab name="099" />
      <NavTab name="About" />
      <NavTab name="Blog" />
      <NavTab name="Projects" />
      <NavTab name="Contact" />
    </SideNavContainer>
  );
};

export default SideNav;
