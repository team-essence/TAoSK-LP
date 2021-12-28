import React, { FCX } from 'react'
import { Modal } from 'components/ui/modal/Modal'
import { ROOT_MARGIN } from 'consts/rootMargin'
import { useInView } from 'react-intersection-observer'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import styled, { css } from 'styled-components'

type Props = {}

export const MobileWorkVisualizationModal: FCX<Props> = ({ className }) => {
  const { ref, inView } = useInView({
    rootMargin: ROOT_MARGIN,
    triggerOnce: true,
  })

  return (
    <StyledContainer className={className} ref={ref}>
      {inView && (
        <Modal title="仕事の見える化">
          <StyledWrap>
            <StyledTitleImageContainer>
              <StyledTitleImage
                src="/modal/mobile/work_mobile_title.png"
                alt="HP,MPを脳波でリアルタイム解析"
              />
            </StyledTitleImageContainer>
            <div>
              <StyledDragonImage src="/modal/mobile/work_mobile_dragon.png" alt="enemy" />
            </div>
            <StyledRightContainer>
              <div>
                <StyledWeaponImage src="/modal/mobile/work_mobile_weapon.png" alt="weapon" />
              </div>
              <div>
                <StyledEffectImage src="/modal/mobile/work_mobile_effect.png" alt="effect" />
              </div>
            </StyledRightContainer>
            <StyledTextImageContainer>
              <StyledTextImage
                src="/modal/mobile/work_mobile_text.png"
                alt="モンスターを倒す感覚で仕事を進めよう!"
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
  width: ${calculateMinSizeBasedOnFigma(610)};
`
const StyledWeaponImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(690)};
`
const StyledTextImageContainer = styled.div`
  width: ${calculateMinSizeBasedOnFigma(1120)};
  transform: translateY(28%);
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
  top: ${calculateMinSizeBasedOnFigma(332)};
  right: 0;
`
