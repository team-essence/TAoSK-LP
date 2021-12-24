import React, { FCX } from 'react'
import styled from 'styled-components'
import { useCalculateFirstViewAnimatedSize } from 'hooks/useCalculateFirstViewAnimatedSize'

type Props = {}

export const FirstViewHeader: FCX<Props> = ({ className }) => {
  useCalculateFirstViewAnimatedSize()

  return (
    <StyledFirstViewHeaderContainer className={className} id="first-view__background">
      <StyledInnerDisplay id="first-view__inner-display" />
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

const StyledInnerDisplay = styled.div`
  position: absolute;
  background-image: url('/screen/screen_test.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`
