import React, { FCX } from 'react'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import { mediaQuery } from 'utils/response/mediaQuery'
import styled from 'styled-components'

type Props = {}

export const Feature: FCX<Props> = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <StyledFeatureImage src="/feature.png" alt="feature" loading="lazy" />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  text-align: center;
`
const StyledFeatureImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(428)};
  margin: 0 auto;
  ${mediaQuery.sm`
    width: ${calculateMinSizeBasedOnFigma(266)};
  `}
`
