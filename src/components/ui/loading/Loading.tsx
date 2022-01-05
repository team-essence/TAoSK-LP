import React, { FCX, useEffect } from 'react'
import { calculateMinSizeBasedOnFigmaWidth } from 'utils/figma/calculateSizeBasedOnFigma'
import { mediaQuery } from 'utils/response/mediaQuery'
import nowLoading from './loading.json'
import lottie from 'lottie-web'
import styled from 'styled-components'

export const Loading: FCX = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#now-loading') as HTMLDivElement,
      renderer: 'svg',
      animationData: JSON.parse(JSON.stringify(nowLoading) || 'null'),
    })

    return () => lottie.stop()
  }, [])

  return (
    <StyledContainer>
      <StyledNowLoading id="now-loading" />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.MINE_SHAFT};
`
const StyledNowLoading = styled.div`
  ${mediaQuery.sm`
    width: ${calculateMinSizeBasedOnFigmaWidth(1100)};
  `}
  width: ${calculateMinSizeBasedOnFigmaWidth(800)};
`
