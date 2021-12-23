import React, { FCX, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import { useCalculateFirstViewAnimatedSize } from 'hooks/useCalculateFirstViewAnimatedSize'

type Props = {}

export const FirstViewHeader: FCX<Props> = ({ className }) => {
  const { innerDisplayStyle } = useCalculateFirstViewAnimatedSize()

  return (
    <StyledFirstViewHeaderContainer className={className} id="first-view__background">
      <StyledInnerDisplay {...innerDisplayStyle} />
    </StyledFirstViewHeaderContainer>
  )
}

const StyledFirstViewHeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('/background/test.png');
  background-repeat: no-repeat;
`

type StyledInnerDisplay = ReturnType<typeof useCalculateFirstViewAnimatedSize>['innerDisplayStyle']
const StyledInnerDisplay = styled.div<StyledInnerDisplay>`
  ${({ top, left, width, height, theme }) =>
    css`
      position: absolute;
      top: ${top}px;
      left: ${left}px;
      width: ${width}px;
      height: ${height}px;
      background-image: url('/screen/screen_test.jpg');
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
    `}
`
