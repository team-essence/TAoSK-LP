import React, { FCX } from 'react'
import styled from 'styled-components'

type Props = {}

export const MobileVideoArea: FCX<Props> = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <StyledTitleImage src="/videoArea/mb_title.png" alt="全ての仕事をゲームの成果で!" />
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
        <a href="!#">
          <StyledStartButtonImage src="/videoArea/start.svg" alt="TAoSKを始める" />
        </a>
      </StyledTextContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 100%;
  height: 651px;
  padding: 56px 14px;
  background: url('/background/mb_brown_bg.png') center center;
  background-repeat: no-repeat;
  background-size: cover;
`
// TODO: youtubeAPI or videoタグで実装
const StyledVideo = styled.div`
  width: 386px;
  height: 217px;
  border-radius: 10px;
  margin-top: 24px;
  background: #f0f;
`
const StyledTitleImage = styled.img`
  aspect-ratio: 1 / 1;
  width: 382px;
  height: 42px;
`
const StyledTextContainer = styled.div`
  text-align: center;
  width: 320px;
  margin: 0 auto;
`
const StyledText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT.WHITE};
  padding: 24px 0;
  line-height: 2;
  background: linear-gradient(0deg, #4d2709, #4d2709 100%);
  -webkit-background-clip: text;
  -webkit-text-stroke: 5px transparent;
`
const StyledStartButtonImage = styled.img`
  width: 310px;
  display: block;
`
