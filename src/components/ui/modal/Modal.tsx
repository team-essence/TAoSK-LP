import React, { FCX, ReactNode } from 'react'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import { strokeTextShadow } from 'utils/strokeTextShadow'
import styled, { css } from 'styled-components'
import { animation } from 'styles/animation/modalAnimation'

type Props = {
  title: string
  children: ReactNode
}

export const Modal: FCX<Props> = ({ className, title, children }) => {
  return (
    <StyledWrapper>
      {!!title && <StyledNamePlate>{title}</StyledNamePlate>}
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

const StyledWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: ${calculateMinSizeBasedOnFigma(1120)};
  height: ${calculateMinSizeBasedOnFigma(573)};
  z-index: ${({ theme }) => theme.Z_INDEX.MODAL};
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
      font-size: ${theme.FONT_SIZES.SIZE_20};
      font-weight: ${theme.FONT_WEIGHTS.BOLD};
      ${strokeTextShadow('2px', theme.COLORS.TEXT.BLACK)};
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
