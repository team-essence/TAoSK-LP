import React, { FCX } from 'react'
import { FirstViewHeader } from 'components/ui/header/FirstViewHeader'
import { leftScrollImage, rightScrollImage } from 'consts/carouselImage'
import { Carousel } from 'components/ui/carousel/Carousel'
import { StartTAoSK } from 'components/ui/startTAoSK/StartTAoSK'
import { SiteFooter } from 'components/ui/footer/SiteFooter'
import styled from 'styled-components'

export const View: FCX = ({ className }) => {
  return (
    <ViewContainer className={className}>
      <FirstViewHeader />
      <Carousel direction="left" images={leftScrollImage} />
      <Carousel direction="right" images={rightScrollImage} />
      <StartTAoSK />
      <SiteFooter />
    </ViewContainer>
  )
}

const ViewContainer = styled.div`
  overflow-x: hidden;
`
