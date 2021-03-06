import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavTabContainer = styled(Link)`
  border: 2px solid grey;
  min-width: 10vw;
  min-height: 6vh;
  width: 10vw;
  height: 6vh;
  margin: 4vh 0vw;
  font-family: "IBM Plex Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: black;
  text-decoration: none;
  ${props =>
      props.active
        ? `background-color: #dfdde1; transform: scale(1.2);`
        : `background-color: #cfc4ca;`}
    :hover {
    transition: all 0.8s ease;
    cursor: pointer;
    ${props =>
      props.active
        ? `background-color: #cfc4ca ;`
        : `background-color: #dfdde1; transform: scale(1.2);`}
  }
`;
