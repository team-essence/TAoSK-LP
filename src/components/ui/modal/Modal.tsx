import React, { FCX, ReactNode } from 'react'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import { strokeTextShadow } from 'utils/strokeTextShadow'
import { mediaQuery } from 'utils/response/mediaQuery'
import styled, { css } from 'styled-components'
import { animation } from 'styles/animation/modalAnimation'

type Props = {
  title: string
  children: ReactNode
}

export const Modal: FCX<Props> = ({ className, title, children }) => {
  return (
    <StyledWrapper>
      <StyledNamePlate>
        <A>{title}</A>
      </StyledNamePlate>
      <StyledChildrenWrapper className={className}>{children}</StyledChildrenWrapper>
      <StyledDragonSymbolWrapper>
        <StyledDragonSymbolLeft />
        <StyledDragonSymbolRight />
      </StyledDragonSymbolWrapper>
      <StyledBackgroundWrapper>
        <StyledBackgroundLeft />
        <StyledBackgroundRight />
      </StyledBackgroundWrapper>
    </StyledWrapper>
  )
}
const A = styled.div`
  background: linear-gradient(-90deg, #ffffff, #fdf7eb 30%, #eeba48);
  background: -webkit-linear-gradient(-90deg, #ffffff, #fdf7eb 30%, #eeba48);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const padding = `${calculateMinSizeBasedOnFigma(65)} ${calculateMinSizeBasedOnFigma(70)}
${calculateMinSizeBasedOnFigma(55)}` // ts-styled-pluginエラーを避けるため
const mobilePadding = `${calculateMinSizeBasedOnFigma(132)} ${calculateMinSizeBasedOnFigma(86)}
${calculateMinSizeBasedOnFigma(36)}` // ts-styled-pluginエラーを避けるため
const StyledWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: ${calculateMinSizeBasedOnFigma(1120)};
  height: ${calculateMinSizeBasedOnFigma(573)};
  padding: ${padding};
  z-index: ${({ theme }) => theme.Z_INDEX.MODAL};
  ${mediaQuery.sm`
     width: 100%;
     height: ${calculateMinSizeBasedOnFigma(1750)};
     padding: ${mobilePadding};
  `}
`
const StyledNamePlate = styled.p`
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_1};
  position: absolute;
  top: ${calculateMinSizeBasedOnFigma(-55 / 2)};
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${calculateMinSizeBasedOnFigma(468)};
  height: ${calculateMinSizeBasedOnFigma(55)};
  background-image: url('/background/nameplate.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  ${animation.namePlate}
  ${({ theme }) =>
    css`
      color: ${theme.COLORS.TEXT.WHITE};
      font-size: ${theme.FONT_SIZES.SIZE_24};
      font-weight: ${theme.FONT_WEIGHTS.BOLD};
      /* ${strokeTextShadow('2px', theme.COLORS.TEXT.BLACK)}; */
    `}
  ${mediaQuery.sm`
    font-size: 16px;
    top: calc(-35px / 2);
    width: ${calculateMinSizeBasedOnFigma(1120)};
    height: ${calculateMinSizeBasedOnFigma(140)};
  `}
`
const StyledChildrenWrapper = styled.div`
  ${animation.children}
`
const StyledBackgroundWrapper = styled.div`
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_MINUS_2};
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const backgroundCss = css`
  width: 100%;
  height: 100%;
  background-image: url('/background/modal-background.svg');
  background-size: 200% 100%;
  background-repeat: no-repeat;
`
const StyledBackgroundLeft = styled.div`
  ${backgroundCss}
  ${animation.bgLeft}
`
const StyledBackgroundRight = styled.div`
  ${backgroundCss}
  ${animation.bgRight}
`
const StyledDragonSymbolWrapper = styled.div`
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_MINUS_1};
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: ${calculateMinSizeBasedOnFigma(600)};
  height: ${calculateMinSizeBasedOnFigma(377)};
`
const dragonSymbolCss = css`
  width: 100%;
  height: 100%;
  background-image: url('/background/dragon-symbol.svg');
  background-size: 200% 100%;
  background-repeat: no-repeat;
`
const StyledDragonSymbolLeft = styled.div`
  ${dragonSymbolCss}
  ${animation.bgLeft}
`
const StyledDragonSymbolRight = styled.div`
  ${dragonSymbolCss}
  ${animation.bgRight}
`
