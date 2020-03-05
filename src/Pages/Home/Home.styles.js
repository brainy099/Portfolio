import styled from "styled-components";
import { animated } from "react-spring";

export const TransitionsItem = styled(animated.div)`
  overflow: hidden;
  font-family: "IBM Plex Sans", sans-serif;
  position: "absolute";
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity, height;
  white-space: nowrap;
  cursor: pointer;
  line-height: 80px;
`;

export const TransitionsDiv = styled.div`
  height: 40vh;
  width: 29vw;
  border: 5px solid grey;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-animation: fadein 2s;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const HomeContainer = styled.div`
  background: url("https://images.unsplash.com/photo-1485841890310-6a055c88698a");
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 20vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 80vw;
  align-items: center;
  justify-content: center;
`;
