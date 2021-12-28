import React, { FCX } from 'react'
import { Modal } from 'components/ui/modal/Modal'
import { useInView } from 'react-intersection-observer'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import styled, { css } from 'styled-components'

type Props = {}

export const MobileStatusVisualizationModal: FCX<Props> = ({ className }) => {
  const { ref, inView } = useInView({
    rootMargin: '-200px',
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
                loading="lazy"
              />
            </StyledTitleImageContainer>
            <div>
              <StyledDragonImage src="/modal/mobile/status_mobile_hr.png" alt="hr" loading="lazy" />
            </div>
            <StyledRightContainer>
              <StyledClearContainer>
                <StyledWeaponImage
                  src="/modal/mobile/status_mobile_clear.png"
                  alt="clear"
                  loading="lazy"
                />
              </StyledClearContainer>
              <div>
                <StyledEffectImage
                  src="/modal/mobile/mobile_status.png"
                  alt="effect"
                  loading="lazy"
                />
              </div>
            </StyledRightContainer>
            <StyledTextImageContainer>
              <StyledTextImage
                src="/modal/mobile/status_mobile_text.png"
                alt="社員の仕事を分析して正確な人事評価を手助け!"
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
const StyledDragonImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(620)};
`
const StyledEffectImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(790)};
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
`
