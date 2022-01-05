import React, { FCX } from 'react'
import { calculateVwBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import { strokeTextShadow } from 'utils/strokeTextShadow'
import styled, { css } from 'styled-components'

type Props = {}

export const MobileVideoArea: FCX<Props> = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <StyledTitleImageContainer>
        <StyledTitleImage
          src="/videoArea/mb_title.svg"
          alt="全ての仕事をゲームの成果で!"
          loading="lazy"
        />
      </StyledTitleImageContainer>
      <StyledVideo></StyledVideo>
      <StyledTextContainer>
        <StyledText>
          仕事と働く人のステータスを&quot;見える化&quot;
          <br />
          プロジェクトがモンスターとして 、<br />
          貴方の前に立ちはだかる......。
          <br />
          RPGの世界で仲間と共に
          <br />
          プロジェクトモンスターをやっつけよう！
        </StyledText>
        <StyledStartButtonContainer href="!#">
          <StyledStartButtonImage src="/videoArea/start.svg" alt="TAoSKを始める" loading="lazy" />
        </StyledStartButtonContainer>
      </StyledTextContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${calculateVwBasedOnFigma(2300)};
  padding: 56px 14px;
  padding: ${calculateVwBasedOnFigma(190)} ${calculateVwBasedOnFigma(60)};
  background: url('/background/mb_brown_bg.png') center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_8};
`
// TODO: youtubeAPI or videoタグで実装
const StyledVideo = styled.div`
  width: 100%;
  height: ${calculateVwBasedOnFigma(840)};
  border-radius: 10px;
  margin-top: ${calculateVwBasedOnFigma(60)};
  background: #f0f;
`
const StyledTitleImageContainer = styled.div`
  width: ${calculateVwBasedOnFigma(1300)};
  margin: 0 auto;
`
const StyledTitleImage = styled.img`
  width: ${calculateVwBasedOnFigma(1300)};
`
const StyledTextContainer = styled.div`
  text-align: center;
  width: ${calculateVwBasedOnFigma(1200)};
  margin: 0 auto;
`
const StyledText = styled.p`
  ${({ theme }) => css`
    color: ${theme.COLORS.TEXT.WHITE};
    ${strokeTextShadow('2px', theme.COLORS.TEXT.BROWN)};
  `}
  font-size: ${calculateVwBasedOnFigma(56)};
  padding: ${calculateVwBasedOnFigma(64)} 0;
  line-height: 2;
`
const StyledStartButtonImage = styled.img`
  width: ${calculateVwBasedOnFigma(1000)};
  display: block;
`
const StyledStartButtonContainer = styled.a`
  display: block;
  width: ${calculateVwBasedOnFigma(1000)};
  margin: 0 auto;
`
