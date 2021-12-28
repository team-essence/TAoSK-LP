import React, { FCX } from 'react'
import { Modal } from 'components/ui/modal/Modal'
import { ROOT_MARGIN } from 'consts/rootMargin'
import { useInView } from 'react-intersection-observer'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import styled, { css } from 'styled-components'

type Props = {}

export const MobileHPandMPVisualizationModal: FCX<Props> = ({ className }) => {
  const { ref, inView } = useInView({
    rootMargin: ROOT_MARGIN,
    triggerOnce: true,
  })

  return (
    <StyledContainer className={className} ref={ref}>
      {inView && (
        <Modal title="HP,MPの見える化">
          <StyledWrap>
            <StyledTitleImageContainer>
              <StyledTitleImage
                src="/modal/mobile/hp_mp_mobile_title.png"
                alt="HP,MPを脳波でリアルタイム解析"
                loading="lazy"
              />
            </StyledTitleImageContainer>
            <div>
              <StyledInstalledUserImage
                src="/modal/mobile/mobile_kageyama.png"
                alt="installedUser"
                loading="lazy"
              />
            </div>
            <StyledEggContainer>
              <StyledEggImage src="/modal/egg.png" alt="egg" loading="lazy" />
            </StyledEggContainer>
            <StyledMindWaveContainer>
              <StyledMindWaveImage src="/modal/mind_wave.png" alt="mind_wave" loading="lazy" />
            </StyledMindWaveContainer>
            <StyledRightContainer>
              <div>
                <StyledTextImage
                  src="/modal/mobile/hp_mp_mobile_text.png"
                  alt="顔認証でHP,MPを表示"
                  loading="lazy"
                />
              </div>
              <div>
                <StyledKurauchiImage
                  src="/modal/mobile/mobile_kurauchi.png"
                  alt="kurauchi"
                  loading="lazy"
                />
              </div>
              <div>
                <StyledSolutionImage
                  src="/weapon/progress-solution.svg"
                  alt="solution"
                  loading="lazy"
                />
              </div>
            </StyledRightContainer>
          </StyledWrap>
        </Modal>
      )}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 95%;
  height: ${calculateMinSizeBasedOnFigma(1750)};
  margin: 0 auto;
`
const StyledWrap = styled.div`
  position: relative;
`
const StyledTitleImageContainer = styled.div`
  width: ${calculateMinSizeBasedOnFigma(1120)};
  margin: 0 auto;
  padding-bottom: 4px;
`
const StyledTitleImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(1120)};
  padding-bottom: ${calculateMinSizeBasedOnFigma(16)};
`
const StyledInstalledUserImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(620)};
`
const StyledMindWaveImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(620)};
`
const StyledKurauchiImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(665)};
`
const StyledTextImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(542)};
`
const StyledEggContainer = styled.div`
  transform: translateY(-24%);
`
const StyledMindWaveContainer = styled.div`
  transform: translateY(-24%);
`
const StyledEggImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(420)};
`
const StyledSolutionImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(350)};
  transform: scaleX(-1) translateY(-16%) translateX(16%);
`
const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: ${calculateMinSizeBasedOnFigma(332)};
  right: 0;
`
