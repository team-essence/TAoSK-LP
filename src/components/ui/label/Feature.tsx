import React, { FCX } from 'react'
import { calculateVwBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
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
  width: ${calculateVwBasedOnFigma(428)};
  margin: 0 auto;
`
