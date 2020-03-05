import React from "react";
import { NavTabContainer } from "./NavTab.styles";

const NavTab = props => {
  return <NavTabContainer>{props.name}</NavTabContainer>;
};

export default NavTab;
