import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import "./App.scss";

const Container = styled(animated.div)`
  display: inline-block;
  background: none;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  cursor: pointer;
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 3) / -90,
  (x - window.innerWidth / 2) / -40,
  1,
];
const trans = (x, y, s) =>
  `perspective(500px) rotateY(${y}deg) rotateX(${x}deg) scale(${s})`;

const GlassCard = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  return (
    <Container
      onMouseMove={({ clientY: y, clientX: x }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
      {/* <StyledImg src={profile} />
            <StyledH1>Ashutosh Hathidara</StyledH1>
            <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3> */}

      <div class="card pika animated"></div>

      <style class="hover"></style>
    </Container>
  );
};

export default GlassCard;
