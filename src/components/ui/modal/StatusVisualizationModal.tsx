import React, { FCX } from 'react'
import { Modal } from 'components/ui/modal/Modal'
import { ROOT_MARGIN } from 'consts/rootMargin'
import { useInView } from 'react-intersection-observer'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import styled, { css } from 'styled-components'
import { Spacer } from '../spacer/Spacer'

type Props = {}

export const StatusVisualizationModal: FCX<Props> = ({ className }) => {
  const { ref, inView } = useInView({
    rootMargin: ROOT_MARGIN,
    triggerOnce: true,
  })

  return (
    <StyledContainer className={className} ref={ref}>
      {inView && (
        <Modal title="ステータスの見える化">
          <StyledWrap>
            <div>
              <StyledHRImage src="/modal/hr.png" alt="hr" loading="lazy" />
            </div>
            <div>
              <div>
                <StyledStatusTitleImage
                  src="/modal/status_title.png"
                  alt="完了したタスクに応じてステータスが上昇"
                />
              </div>
              <div>
                <StyledStatusVideoContainer>
                  <video loop autoPlay muted>
                    <source src="/mp4/status.mp4" type="video/mp4" />
                    <p>Your browser doesn&lsquo;t support HTML5 video.</p>
                  </video>
                </StyledStatusVideoContainer>

                <Spacer size={8} />
              </div>
              <div>
                <StyledStatusTextImage
                  src="/modal/status_text.png"
                  alt="社員の仕事を分析して正確な人事評価を手助け"
                />
              </div>
            </div>
            <StyledQuillContainer>
              <StyledQuillImage src="/modal/quill.png" alt="quill" />
            </StyledQuillContainer>
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
  display: flex;
  justify-content: center;
  gap: ${calculateMinSizeBasedOnFigma(30)};
  position: relative;
`
const StyledHRImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(325)};
`
const StyledStatusTitleImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(448)};
`
const StyledStatusTextImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(560)};
`
const StyledQuillContainer = styled.div`
  position: absolute;
  top: ${calculateMinSizeBasedOnFigma(-90)};
  right: ${calculateMinSizeBasedOnFigma(-110)};
`
const StyledQuillImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(263)};
`

const StyledStatusVideoContainer = styled.div`
  width: ${calculateMinSizeBasedOnFigma(598)};
  height: ${calculateMinSizeBasedOnFigma(184.45)};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${calculateMinSizeBasedOnFigma(4)};
  border: solid ${calculateMinSizeBasedOnFigma(1)} ${({ theme }) => theme.COLORS.BORDER.MINE_SHAFT};

  video {
    width: ${calculateMinSizeBasedOnFigma(582)};
    height: ${calculateMinSizeBasedOnFigma(168.45)};
    object-fit: cover;
    object-position: 80% 0%;
    border-radius: ${calculateMinSizeBasedOnFigma(4)};
  }
`
