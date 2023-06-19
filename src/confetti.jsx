import { confettiSpan } from "./css/confetti-span";
/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

export const Confettti = ({ num, delay, speed }) => {
  return <span css={confettiSpan(num, delay, speed)}></span>;
};
