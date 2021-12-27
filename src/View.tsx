import React, { FCX } from 'react'
import { leftScrollImage, rightScrollImage } from 'consts/carouselImage'
import { useWatchInnerAspect } from 'hooks/useWatchInnerAspect'
import { FirstViewHeader } from 'components/ui/header/FirstViewHeader'
import { VideoArea } from 'components/ui/videoArea/VideoArea'
import { MobileVideoArea } from 'components/ui/videoArea/MobileVideoArea'
import { Carousel } from 'components/ui/carousel/Carousel'
import { StartTAoSK } from 'components/ui/startTAoSK/StartTAoSK'
import { SiteFooter } from 'components/ui/footer/SiteFooter'
import styled from 'styled-components'

export const View: FCX = ({ className }) => {
  const { innerWidth } = useWatchInnerAspect()

  return (
    <ViewContainer className={className}>
      <FirstViewHeader />
      {innerWidth >= 574 ? <VideoArea /> : <MobileVideoArea />}
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
