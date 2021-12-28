import React, { FCX } from 'react'
import { leftScrollImage, rightScrollImage } from 'consts/carouselImage'
import { useWatchInnerAspect } from 'hooks/useWatchInnerAspect'
import { calculateVwBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import { mediaQuery } from 'utils/response/mediaQuery'
import { FirstViewHeader } from 'components/ui/header/FirstViewHeader'
import { VideoArea } from 'components/ui/videoArea/VideoArea'
import { MobileVideoArea } from 'components/ui/videoArea/MobileVideoArea'
import { Feature } from 'components/ui/label/Feature'
import { HPandMPVisualizationModal } from 'components/ui/modal/HPandMPVisualizationModal'
import { MobileHPandMPVisualizationModal } from 'components/ui/modal/MobileHPandMPVisualizationModal'
import { WorkVisualizationModal } from 'components/ui/modal/WorkVisualizationModal'
import { MobileWorkVisualizationModal } from 'components/ui/modal/MobileWorkVisualizationModal'
import { StatusVisualizationModal } from 'components/ui/modal/StatusVisualizationModal'
import { MobileStatusVisualizationModal } from 'components/ui/modal/MobileStatusVisualizationModal'
import { Carousel } from 'components/ui/carousel/Carousel'
import { StartTAoSK } from 'components/ui/startTAoSK/StartTAoSK'
import { SiteFooter } from 'components/ui/footer/SiteFooter'
import styled from 'styled-components'

export const View: FCX = ({ className }) => {
  const { innerWidth } = useWatchInnerAspect()
  const breakpoint = 574

  return (
    <ViewContainer className={className}>
      <FirstViewHeader />
      <StyledFixeContainer>
        <StyledVideoAreaContainer>
          {innerWidth >= breakpoint ? <VideoArea /> : <MobileVideoArea />}
        </StyledVideoAreaContainer>
        <StyledFeatureWrap />
        <StyledModalContainer>
          {innerWidth >= breakpoint ? (
            <HPandMPVisualizationModal />
          ) : (
            <MobileHPandMPVisualizationModal />
          )}
          {innerWidth >= breakpoint ? <WorkVisualizationModal /> : <MobileWorkVisualizationModal />}
          {innerWidth >= breakpoint ? (
            <StatusVisualizationModal />
          ) : (
            <MobileStatusVisualizationModal />
          )}
        </StyledModalContainer>
        <StyledCarouselContainer>
          <Carousel direction="left" images={leftScrollImage} />
          <Carousel direction="right" images={rightScrollImage} />
        </StyledCarouselContainer>
        <StyledStartTAoSKContainer>
          <StartTAoSK />
        </StyledStartTAoSKContainer>
      </StyledFixeContainer>
      <SiteFooter />
    </ViewContainer>
  )
}

const ViewContainer = styled.div`
  overflow-x: hidden;
`
const StyledFixeContainer = styled.div`
  &::before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: 50% 100%;
    background-image: url('/background/plain.jpg');
    background-size: cover;
  }
`
const StyledModalContainer = styled.div`
  & > div {
    margin-bottom: ${calculateVwBasedOnFigma(200)};
    ${mediaQuery.sm`
      margin-bottom: ${calculateVwBasedOnFigma(300)};
    `}
  }
`
const StyledCarouselContainer = styled.div`
  & > div {
    margin-bottom: ${calculateVwBasedOnFigma(20)};
  }
`
const StyledVideoAreaContainer = styled.div`
  padding-top: ${calculateVwBasedOnFigma(137)};
  ${mediaQuery.sm`
    padding-top: ${calculateVwBasedOnFigma(260)};
  `}
`
const StyledStartTAoSKContainer = styled.div`
  margin: ${calculateVwBasedOnFigma(106)} 0;
  ${mediaQuery.sm`
    margin: ${calculateVwBasedOnFigma(280)} 0;
  `}
`
const StyledFeatureWrap = styled(Feature)`
  margin: ${calculateVwBasedOnFigma(109)} 0 ${calculateVwBasedOnFigma(68)};
  ${mediaQuery.sm`
    margin: ${calculateVwBasedOnFigma(180)} 0 ${calculateVwBasedOnFigma(160)};
  `}
`
