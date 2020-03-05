import styled from "styled-components";

export const NavTabContainer = styled.div`
  border: 2px solid grey;
  width: 10vw;
  height: 6vh;
  margin: 3vh 0vw;
  font-family: "IBM Plex Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  :hover {
    transition: all 0.8s ease;
    transform: scale(1.2);
    background-color: #dfdde1;
    cursor: pointer;
  }
`;
