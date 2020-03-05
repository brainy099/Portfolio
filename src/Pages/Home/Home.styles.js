import styled from "styled-components";
import { animated } from "react-spring";

export const TransitionsItem = styled(animated.div)`
  color: white;
  display: flex;
  align-items: center;
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity, height;
  line-height: 80px;
`;

export const HomeContainer = styled.div`
  margin-left: 20vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 80vw;
  justify-content: center;
  align-items: center;
`;
