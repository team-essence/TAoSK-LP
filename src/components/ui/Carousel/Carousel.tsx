import React, { FCX } from "react";
import { calculateVwBasedOnFigma } from "utils/figma/calculateSizeBasedOnFigma";
import styled, { css } from "styled-components";

type Props = {};

export const Carousel: FCX<Props> = ({ className }) => {
  return (
    <StyledContainer>
      <StyledUl>
        <StyledContent>tomato</StyledContent>
        <StyledContent>orange</StyledContent>
        <StyledContent>blue</StyledContent>
        <StyledContent>green</StyledContent>
      </StyledUl>
      <StyledUl>
        <StyledContent>tomato</StyledContent>
        <StyledContent>orange</StyledContent>
        <StyledContent>blue</StyledContent>
        <StyledContent>green</StyledContent>
      </StyledUl>
      <StyledUl>
        <StyledContent>tomato</StyledContent>
        <StyledContent>orange</StyledContent>
        <StyledContent>blue</StyledContent>
        <StyledContent>green</StyledContent>
      </StyledUl>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  height: 340px;
  margin-bottom: 100px;
  background: #f00;
`;
const StyledUl = styled.ul`
  display: flex;
  animation: loop-slide 20s infinite linear 1s both;
  @keyframes loop-slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
const StyledContent = styled.li`
  width: ${calculateVwBasedOnFigma(442)};
  height: ${calculateVwBasedOnFigma(280)};
`;
