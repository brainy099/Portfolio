import React from "react";
import {
  SideNavContainer,
  SideNavList,
  SideNavListItem
} from "./SideNav.styles";

const SideNav = () => {
  return (
    <SideNavContainer>
      <SideNavList>
        <SideNavListItem>About</SideNavListItem>
        <SideNavListItem>Blog</SideNavListItem>
        <SideNavListItem>Projects</SideNavListItem>
        <SideNavListItem>Contact</SideNavListItem>
      </SideNavList>
    </SideNavContainer>
  );
};

export default SideNav;
