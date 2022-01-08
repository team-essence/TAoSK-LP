import React, { FCX } from 'react'
import { Modal } from 'components/ui/modal/Modal'
import { ROOT_MARGIN } from 'consts/rootMargin'
import { useInView } from 'react-intersection-observer'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import { animation } from 'styles/animation/modalAnimation'
import styled from 'styled-components'

type Props = {}

export const MobileStatusVisualizationModal: FCX<Props> = ({ className }) => {
  const { ref, inView } = useInView({
    rootMargin: ROOT_MARGIN,
    triggerOnce: true,
  })

  return (
    <StyledContainer className={className} ref={ref}>
      {inView && (
        <Modal title="ステータスの見える化">
          <StyledWrap>
            <StyledTitleImageContainer>
              <StyledTitleImage
                src="/modal/mobile/status_mobile_title.png"
                alt="完了したタスクに応じてステータスが上昇"
              />
            </StyledTitleImageContainer>
            <div>
              <StyledHumanResourcesPaperImage src="/modal/mobile/status_mobile_hr.png" alt="hr" />
            </div>
            <StyledRightContainer>
              <StyledClearContainer>
                <StyledWeaponImage src="/modal/mobile/status_mobile_clear.png" alt="clear" />
              </StyledClearContainer>
              <div>
                <StyledStatusVideoContainer>
                  <video loop autoPlay muted playsInline preload="auto">
                    <source src="/mp4/status.mp4" type="video/mp4" />
                    <p>Your browser doesn&lsquo;t support HTML5 video.</p>
                  </video>
                </StyledStatusVideoContainer>
              </div>
            </StyledRightContainer>
            <StyledTextImageContainer>
              <StyledTextImage
                src="/modal/mobile/status_mobile_text.png"
                alt="社員の仕事を分析して正確な人事評価を手助け!"
              />
            </StyledTextImageContainer>
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
  ${animation.firstShownChildren}
`
const StyledTitleImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(1120)};
  padding-bottom: ${calculateMinSizeBasedOnFigma(16)};
`
const StyledHumanResourcesPaperImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(620)};
  ${animation.secondShownChildren}
`
const StyledClearContainer = styled.div`
  padding-bottom: ${calculateMinSizeBasedOnFigma(30)};
`
const StyledWeaponImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(540)};
`
const StyledTextImageContainer = styled.div`
  width: ${calculateMinSizeBasedOnFigma(1120)};
  transform: translateY(8%);
  margin: 0 auto;
  ${animation.thirdShownChildren}
`
const StyledTextImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(1120)};
`
const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: ${calculateMinSizeBasedOnFigma(360)};
  right: 0;
  ${animation.secondShownChildren}
`

const StyledStatusVideoContainer = styled.div`
  width: ${calculateMinSizeBasedOnFigma(740)};
  height: ${calculateMinSizeBasedOnFigma(260)};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${calculateMinSizeBasedOnFigma(8)};
  border: solid ${calculateMinSizeBasedOnFigma(1)} ${({ theme }) => theme.COLORS.BORDER.MINE_SHAFT};

  video {
    width: ${calculateMinSizeBasedOnFigma(700)};
    height: ${calculateMinSizeBasedOnFigma(220)};
    object-fit: cover;
    object-position: 100% 0%;
    border-radius: ${calculateMinSizeBasedOnFigma(8)};
  }
`
