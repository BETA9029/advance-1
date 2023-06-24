/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

export const createConfetti = (num, delay, speed) => {
  return css`
    position: absolute;
    top: -10%;
    width: 2.5vw;
    height: 1.5vw;
    ${selectPosition()};
    ${selectColor()};
    ${createAnimetion(num, delay, speed)};
  `;
};

function createAnimetion(num, delay, speed) {
  const transX = num % 2 === 0 ? 30 : -30;
  const confettiMove = keyframes`
    0% {
      top: -10%;
      transform: translateX(0) rotateX(0) rotateY(0);
    }
    20%{
        transform: translateX(${transX}vw) rotateX(180deg) rotateY(360deg);
    }
    40%{
        transform: translateX(0) rotateX(-180deg) rotateY(-360deg);
    }
    60%{
        transform: translateX(${transX}vw) rotateX(180deg) rotateY(360deg);
    }
    80% {
      transform: translateX(0vw) rotateX(-180deg) rotateY(-360deg);
    }
    100% {
      top: 125%;
      transform: translateX(${transX}vw) rotateX(180deg) rotateY(360deg));
    }
  `;

  return css`
    animation-name: ${confettiMove};
    animation-duration: ${speed}s;
    animation-timing-function: linear;
    animation-delay: ${num * delay}s;
    animation-iteration-count: 1;
  `;
}

function selectColor() {
  const color = [
    "red",
    "blue",
    "gray",
    "green",
    "yellow",
    "purple",
    "teal",
    "aqua",
    "olive",
    "maroon",
  ];
  const colorNm = Math.floor(Math.random() * color.length);
  return css`
    background: ${color[colorNm]};
  `;
}

function selectPosition() {
  const randomPosition = Math.floor(Math.random() * 9) + 2;
  return css`
    left: ${randomPosition * 10}%;
  `;
}
