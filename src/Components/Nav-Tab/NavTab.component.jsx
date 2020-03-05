import React from "react";
import { NavTabContainer } from "./NavTab.styles";

const NavTab = props => {
  return <NavTabContainer to={props.to}>{props.name}</NavTabContainer>;
};

export default NavTab;
