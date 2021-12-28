import React, { FCX } from 'react'
import { Modal } from 'components/ui/modal/Modal'
import { useInView } from 'react-intersection-observer'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import styled, { css } from 'styled-components'

type Props = {}

export const HPandMPVisualizationModal: FCX<Props> = ({ className }) => {
  const { ref, inView } = useInView({
    rootMargin: '-200px',
    triggerOnce: true,
  })

  return (
    <StyledContainer className={className} ref={ref}>
      {inView && (
        <Modal title="HP,MPの見える化">
          <StyledWrap>
            <div>
              <StyledTitleImage
                src="/modal/hp_mp_title.png"
                alt="HP,MPを脳波でリアルタイム解析"
                loading="lazy"
              />
            </div>
            <StyledFlexContainer>
              <div>
                <StyledKageyamaImage src="/modal/kageyama.png" alt="kageyama" loading="lazy" />
              </div>
              <div>
                <StyledMindWaveImage src="/modal/mind_wave.png" alt="mind_wave" loading="lazy" />
              </div>
              <StyledKurauchiContainer>
                <StyledKurauchiImage src="/modal/kurauchi.png" alt="kurauchi" loading="lazy" />
              </StyledKurauchiContainer>
            </StyledFlexContainer>
            <StyledTextImageContainer>
              <StyledTextImage
                src="/modal/hp_mp_text.png"
                alt="顔認証で仲間の名前,役職,HP,MPを表示"
                loading="lazy"
              />
            </StyledTextImageContainer>
          </StyledWrap>
        </Modal>
      )}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: ${calculateMinSizeBasedOnFigma(1120)};
  height: ${calculateMinSizeBasedOnFigma(573)};
  margin: 0 auto;
`
const StyledWrap = styled.div`
  position: relative;
`
const StyledFlexContainer = styled.div`
  display: flex;
  gap: ${calculateMinSizeBasedOnFigma(16)};
`
const StyledTitleImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(607)};
  padding-bottom: ${calculateMinSizeBasedOnFigma(16)};
`
const StyledKageyamaImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(394)};
`
const StyledMindWaveImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(220)};
`
const StyledKurauchiContainer = styled.div`
  transform: translateY(-41%);
`
const StyledKurauchiImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(316)};
`
const StyledTextImageContainer = styled.div`
  position: absolute;
  bottom: ${calculateMinSizeBasedOnFigma(-12)};
  right: 0;
`
const StyledTextImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(569)};
`
