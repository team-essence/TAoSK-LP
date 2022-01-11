import React, { FCX } from 'react'
import { calculateVwBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import { mediaQuery } from 'utils/response/mediaQuery'
import { strokeTextShadow } from 'utils/strokeTextShadow'
import { useWatchInnerAspect } from 'hooks/useWatchInnerAspect'
import styled, { css } from 'styled-components'

export const StartTAoSK: FCX = ({ className }) => {
  const { innerWidth } = useWatchInnerAspect()

  return (
    <StyledContainer className={className}>
      <StyledInnerBorder>
        <h3>
          <StyledTitle
            src={innerWidth >= 576 ? '/startTaosk/title.svg' : '/startTaosk/sm-title.svg'}
            alt="title"
          />
        </h3>
        <StyledFlexContainer>
          <StyledMainVisualContainer>
            <StyledMainVisual src="/startTaosk/login.png" alt="main-visual" />
          </StyledMainVisualContainer>
          <StyledRightWrapper>
            <StyledText>『TAoSK』の世界で仕事を楽しもう！</StyledText>
            <StyledStartButton>
              <a href="!#">
                <StyledStartButtonImage src="/startTaosk/start.svg" alt="今すぐ始める" />
              </a>
            </StyledStartButton>
          </StyledRightWrapper>
        </StyledFlexContainer>
      </StyledInnerBorder>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: ${calculateVwBasedOnFigma(1004)};
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: ${calculateVwBasedOnFigma(10)};
  margin: 0 auto;
  ${mediaQuery.sm`
    width: 95%;
    padding: ${calculateVwBasedOnFigma(24)};
  `}
`
const StyledInnerBorder = styled.div`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    border: 4px solid ${theme.COLORS.BORDER.WHITE};
    border-radius: 10px;
    padding: ${calculateVwBasedOnFigma(60)} 0;
    ${mediaQuery.sm`
      padding: ${calculateVwBasedOnFigma(100)} 0;
    `}
  `}
`
const StyledTitle = styled.img`
  width: ${calculateVwBasedOnFigma(711)};
  padding-bottom: ${calculateVwBasedOnFigma(40)};
  ${mediaQuery.sm`
    width: ${calculateVwBasedOnFigma(1140)};
    padding-bottom: ${calculateVwBasedOnFigma(120)};
  `}
`
const StyledMainVisualContainer = styled.div`
  ${mediaQuery.sm`
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
  `}
`
const StyledMainVisual = styled.img`
  width: ${calculateVwBasedOnFigma(450)};
  height: ${calculateVwBasedOnFigma(282)};
  object-fit: cover;
  border-radius: 10px;
  ${mediaQuery.sm`
    width: 100%;
    height: ${calculateVwBasedOnFigma(800)};
  `}
`
const StyledStartButtonImage = styled.img`
  width: ${calculateVwBasedOnFigma(314)};
  ${mediaQuery.sm`
    width: ${calculateVwBasedOnFigma(1000)};
  `}
`
const StyledStartButton = styled.button`
  display: block;
`
const StyledText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.SIZE_24};
    color: ${theme.COLORS.TEXT.WHITE};
    ${strokeTextShadow('2px', theme.COLORS.TEXT.BROWN)};
  `}
  ${mediaQuery.sm`
    font-size: ${calculateVwBasedOnFigma(64)};
  `}
`
const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${calculateVwBasedOnFigma(48)};
  ${mediaQuery.sm`
    display: block;
  `}
`
const StyledRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${calculateVwBasedOnFigma(365)};
  ${mediaQuery.sm`
    margin: 0 auto;
    width: ${calculateVwBasedOnFigma(1140)};
  `}
  p {
    text-align: center;
    padding-bottom: ${calculateVwBasedOnFigma(40)};
    ${mediaQuery.sm`
      padding: ${calculateVwBasedOnFigma(64)} 0;
    `}
  }
`
