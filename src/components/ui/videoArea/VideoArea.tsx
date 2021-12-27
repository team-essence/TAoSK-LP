import React, { FCX } from 'react'
import { calculateVwBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import styled from 'styled-components'

type Props = {}

export const VideoArea: FCX<Props> = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <StyledWeaponContainer>
        <p>
          <StyledWeapon src="/weapon/progress-motivation.svg" alt="motivation" loading="lazy" />
        </p>
        <p>
          <StyledWeapon src="/weapon/progress-plan.svg" alt="plan" loading="lazy" />
        </p>
        <p>
          <StyledWeapon src="/weapon/progress-design.svg" alt="design" loading="lazy" />
        </p>
      </StyledWeaponContainer>
      <StyledCenterContent>
        <StyledInnerContent>
          <StyledVideo></StyledVideo>
          <StyledTextContainer>
            <StyledTitleImage
              src="/videoArea/title.png"
              alt="全ての仕事をゲームの成果で!"
              loading="lazy"
            />
            <StyledText>
              仕事と働く人のステータスを&quot;見える化&quot;
              プロジェクトがモンスターとして、貴方の前に立ちはだかる......。
              RPGの世界で仲間と共にプロジェクトモンスターをやっつけよう！
            </StyledText>
            <a href="!#">
              <StyledStartButtonImage
                src="/videoArea/start.svg"
                alt="TAoSKを始める"
                loading="lazy"
              />
            </a>
          </StyledTextContainer>
        </StyledInnerContent>
      </StyledCenterContent>
      <StyledWeaponContainer>
        <p>
          <StyledWeapon src="/weapon/progress-technology.svg" alt="technology" loading="lazy" />
        </p>
        <p>
          <StyledWeapon src="/weapon/progress-achievement.svg" alt="achievement" loading="lazy" />
        </p>
        <p>
          <StyledWeapon src="/weapon/progress-solution.svg" alt="solution" loading="lazy" />
        </p>
      </StyledWeaponContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: ${calculateVwBasedOnFigma(598)};
  padding: ${calculateVwBasedOnFigma(50)} ${calculateVwBasedOnFigma(48)};
  background: url('/background/brown_bg.png') center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_8};
`
const StyledWeapon = styled.img`
  aspect-ratio: 1 / 1;
  width: ${calculateVwBasedOnFigma(114)};
`
const StyledWeaponContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const StyledCenterContent = styled.div`
  width: ${calculateVwBasedOnFigma(1004)};
  height: ${calculateVwBasedOnFigma(498)};
  padding: ${calculateVwBasedOnFigma(10)};
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
`
const StyledInnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  border: 4px solid ${({ theme }) => theme.COLORS.BORDER.WHITE};
  border-radius: 10px;
`
// TODO: youtubeAPI or videoタグで実装
const StyledVideo = styled.div`
  width: ${calculateVwBasedOnFigma(450)};
  height: ${calculateVwBasedOnFigma(253)};
  border-radius: 10px;
  background: #f0f;
`
const StyledTitleImage = styled.img`
  aspect-ratio: 1 / 1;
  width: ${calculateVwBasedOnFigma(385)};
  height: ${calculateVwBasedOnFigma(124)};
`
const StyledTextContainer = styled.div`
  width: ${calculateVwBasedOnFigma(385)};
`
const StyledText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZES.SIZE_20};
  color: ${({ theme }) => theme.COLORS.TEXT.WHITE};
  padding: ${calculateVwBasedOnFigma(20)} 0;
  background: linear-gradient(0deg, #4d2709, #4d2709 100%);
  -webkit-background-clip: text;
  -webkit-text-stroke: 5px transparent;
`
const StyledStartButtonImage = styled.img`
  margin: 0 auto;
  width: ${calculateVwBasedOnFigma(314)};
  display: block;
`
