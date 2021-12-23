import React, { FCX } from "react";
import { calculateVwBasedOnFigma } from "utils/figma/calculateSizeBasedOnFigma";
import { mediaQuery } from "utils/response/mediaQuery";
import styled, { css } from "styled-components";

export const StartTAoSK: FCX = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <StyledInnerBorder>
        <h3>
          <StyledTitle src="/startTaosk/title.svg" alt="title" />
        </h3>
        <StyledFlexContainer>
          <div>
            <StyledMainVisual src="/startTaosk/login.png" alt="main-visual" />
          </div>
          <StyledRightWrapper>
            <StyledText>
              テキストは後で送られてくるテキストは後で送られてくるテキストは後で送られてくるテキストは後で送られてくるテキストは後で送られてくるテキストは後で送られてくるテキストは後で送られてくるテキストは後で送られてくるテキストは後で送られてくるテキストは後で送られてくるテキストは後で送られてくる
            </StyledText>
            <StyledStartButton>
              <a href="!#">
                <StyledStartButtonImage
                  src="/startTaosk/start.svg"
                  alt="今すぐ始める"
                />
              </a>
            </StyledStartButton>
          </StyledRightWrapper>
        </StyledFlexContainer>
      </StyledInnerBorder>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: ${calculateVwBasedOnFigma(1004)};
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: ${calculateVwBasedOnFigma(10)};
  margin: 0 auto;
`;
const StyledInnerBorder = styled.div`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    border: 4px solid ${theme.COLORS.BORDER.WHITE};
    border-radius: 10px;
    padding: ${calculateVwBasedOnFigma(60)} 0;
  `}
`;
const StyledTitle = styled.img`
  width: ${calculateVwBasedOnFigma(711)};
  padding-bottom: ${calculateVwBasedOnFigma(40)};
`;
const StyledMainVisual = styled.img`
  width: ${calculateVwBasedOnFigma(450)};
  height: ${calculateVwBasedOnFigma(282)};
  object-fit: cover;
`;
const StyledStartButtonImage = styled.img`
  width: ${calculateVwBasedOnFigma(314)};
`;
const StyledStartButton = styled.button`
  display: block;
`;
const StyledText = styled.p`
  color: ${({ theme }) => theme.COLORS.TEXT.WHITE};
  background: linear-gradient(0deg, #4d2709, #4d2709 100%);
  -webkit-background-clip: text;
  -webkit-text-stroke: 5px transparent;
  ${mediaQuery.md`
    -webkit-text-stroke: 4px transparent;
  `}
  ${mediaQuery.sm`
    -webkit-text-stroke: 2px transparent;
  `}
`;
const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${calculateVwBasedOnFigma(48)};
  ${mediaQuery.sm`
    display: block;
  `}
`;
const StyledRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${calculateVwBasedOnFigma(365)};
  p {
    text-align: center;
    padding-bottom: ${calculateVwBasedOnFigma(40)};
  }
`;
