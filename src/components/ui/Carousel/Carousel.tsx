import React, { FCX } from "react";
import { calculateVwBasedOnFigma } from "utils/figma/calculateSizeBasedOnFigma";
import styled, { keyframes, css } from "styled-components";

type Props = {
  direction: "left" | "right";
};

export const Carousel: FCX<Props> = ({ direction }) => {
  return (
    <StyledContainer>
      <StyledUl direction={direction}>
        <StyledLi>1</StyledLi>
        <StyledLi>2</StyledLi>
        <StyledLi>3</StyledLi>
        <StyledLi>4</StyledLi>
      </StyledUl>
      <StyledUl direction={direction}>
        <StyledLi>1</StyledLi>
        <StyledLi>2</StyledLi>
        <StyledLi>3</StyledLi>
        <StyledLi>4</StyledLi>
      </StyledUl>
    </StyledContainer>
  );
};

const infinityScrollLeft = keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
`;
const infinityScrollRight = keyframes`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
`;
const StyledContainer = styled.div`
  display: flex;
  overflow: hidden;
`;
const StyledUl = styled.ul<{ direction: "left" | "right" }>`
  display: flex;
  list-style: none;
  ${({ direction }) =>
    css`
      animation: ${direction === "left"
          ? infinityScrollLeft
          : infinityScrollRight}
        15s infinite linear 0.5s both;
    `}
`;
const StyledLi = styled.li`
  width: calc(100vw / 4);
  height: ${calculateVwBasedOnFigma(280)};
  background: #f0f;
  margin: 0 ${calculateVwBasedOnFigma(20)};
`;
