import React, { FCX } from 'react'
import {
  calculateMinSizeBasedOnFigma,
  calculateSmMinSizeBasedOnFigma,
} from 'utils/figma/calculateSizeBasedOnFigma'
import { mediaQuery } from 'utils/response/mediaQuery'
import styled from 'styled-components'

type Props = {}

export const Feature: FCX<Props> = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <StyledFeatureImage src="/feature.png" alt="feature" />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  position: relative;
  text-align: center;
`
const StyledFeatureImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(428)};
  margin: 0 auto;
  ${mediaQuery.sm`
    width: ${calculateSmMinSizeBasedOnFigma(266)};
  `}
`
