import React, { FCX, useState } from 'react'
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
import styled, { css } from 'styled-components'

export const View: FCX = ({ className }) => {
  const { innerWidth } = useWatchInnerAspect()
  const [hasFirstViewAnimationDone, setHasFirstViewAnimationDone] = useState<boolean>(false)
  const breakpoint = 574

  return (
    <ViewContainer className={className}>
      <StyledFirstViewHeader setHasFirstViewAnimationDone={setHasFirstViewAnimationDone} />
      <StyledFixeContainer hasFirstViewAnimationDone={hasFirstViewAnimationDone}>
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
const StyledFirstViewHeader = styled(FirstViewHeader)`
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_0};
`
const StyledFixeContainer = styled.div<{ hasFirstViewAnimationDone: boolean }>`
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_1};
  &::before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${({ theme }) => theme.Z_INDEX.INDEX_MINUS_2};
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    ${({ hasFirstViewAnimationDone }) =>
      hasFirstViewAnimationDone
        ? css`
            background-position: 50% 100%;
            background-image: url('/background/plain.jpg');
            background-size: cover;
          `
        : css`
            background-position: center top;
            background-image: url('/background/first_view_top.svg');
            background-size: contain;
          `}
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
  position: relative;
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
