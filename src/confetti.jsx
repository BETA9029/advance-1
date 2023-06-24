import { createConfetti } from "./css/confetti-span";
/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

export const Confettti = ({ number, delay, speed }) => {
  return (
    <>
      {[...Array(number)].map((valule, key) => (
        <span css={createConfetti(key, delay, speed)}></span>
      ))}
    </>
  );
};
