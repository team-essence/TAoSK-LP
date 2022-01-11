import React, { FCX } from 'react'
import { Modal } from 'components/ui/modal/Modal'
import { ROOT_MARGIN } from 'consts/rootMargin'
import { useInView } from 'react-intersection-observer'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import { animation } from 'styles/animation/modalAnimation'
import styled from 'styled-components'

type Props = {}

export const HPandMPVisualizationModal: FCX<Props> = ({ className }) => {
  const { ref, inView } = useInView({
    rootMargin: ROOT_MARGIN,
    triggerOnce: true,
  })

  return (
    <StyledContainer className={className} ref={ref}>
      {inView && (
        <Modal title="HP,MPの見える化">
          <StyledWrap>
            <div>
              <StyledTitleImage src="/modal/hp_mp_title.svg" alt="HP,MPを脳波でリアルタイム解析" />
            </div>
            <StyledFlexContainer>
              <div>
                <StyledInstalledUserImage src="/modal/kageyama.png" alt="installedUser" />
              </div>
              <div>
                <StyledMindWaveImage src="/modal/mind_wave.png" alt="mind_wave" />
              </div>
              <StyledKurauchiContainer>
                <StyledARFaceVideoContainer>
                  <video loop autoPlay muted playsInline>
                    <source src="/mp4/ar_face.mp4" type="video/mp4" />
                    <p>Your browser doesn&lsquo;t support HTML5 video.</p>
                  </video>
                </StyledARFaceVideoContainer>
              </StyledKurauchiContainer>
            </StyledFlexContainer>
            <StyledTextImageContainer>
              <StyledTextImage
                src="/modal/hp_mp_text.svg"
                alt="顔認証で仲間の名前,役職,HP,MPを表示"
              />
            </StyledTextImageContainer>
            <StyledEggContainer>
              <StyledEggImage src="/modal/egg.png" alt="egg" />
            </StyledEggContainer>
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
  justify-content: center;
`
const StyledTitleImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(607)};
  padding-bottom: ${calculateMinSizeBasedOnFigma(16)};
  ${animation.firstShownChildren}
`
const StyledInstalledUserImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(394)};
  ${animation.firstShownChildren}
`
const StyledMindWaveImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(220)};
  ${animation.firstShownChildren}
`
const StyledKurauchiContainer = styled.div`
  transform: translateY(-41%);
  ${animation.secondShownChildren}
`
const StyledKurauchiImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(316)};
`
const StyledTextImageContainer = styled.div`
  position: absolute;
  bottom: ${calculateMinSizeBasedOnFigma(0)};
  right: 0;
  ${animation.secondShownChildren}
`
const StyledTextImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(569)};
`
const StyledEggContainer = styled.div`
  position: absolute;
  left: ${calculateMinSizeBasedOnFigma(-124)};
  bottom: ${calculateMinSizeBasedOnFigma(-114)};
`
const StyledEggImage = styled.img`
  aspect-ratio: 1 / 1;
  width: ${calculateMinSizeBasedOnFigma(231)};
  height: ${calculateMinSizeBasedOnFigma(180)};
`

const StyledARFaceVideoContainer = styled.div`
  width: ${calculateMinSizeBasedOnFigma(316)};
  height: ${calculateMinSizeBasedOnFigma(276)};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${calculateMinSizeBasedOnFigma(4)};
  border: solid ${calculateMinSizeBasedOnFigma(1)} ${({ theme }) => theme.COLORS.BORDER.MINE_SHAFT};

  video {
    width: ${calculateMinSizeBasedOnFigma(300)};
    height: ${calculateMinSizeBasedOnFigma(262)};
    object-fit: cover;
    border-radius: ${calculateMinSizeBasedOnFigma(4)};
  }
`
