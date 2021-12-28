import React, { FCX } from 'react'
import { Modal } from 'components/ui/modal/Modal'
import { useInView } from 'react-intersection-observer'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import styled, { css } from 'styled-components'

type Props = {}

export const WorkVisualizationModal: FCX<Props> = ({ className }) => {
  const { ref, inView } = useInView({
    rootMargin: '-200px',
    triggerOnce: true,
  })

  return (
    <StyledContainer className={className} ref={ref}>
      {inView && (
        <Modal title="仕事の見える化">
          <StyledWrap>
            <StyledTextImageContainer>
              <StyledTextImage
                src="/modal/work_text.png"
                alt="モンスターを倒す感覚で仕事を進めよう!"
                loading="lazy"
              />
            </StyledTextImageContainer>
            <StyledFlexContainer>
              <div>
                <StyledDragonImage src="/modal/dragon.png" alt="dragon" loading="lazy" />
              </div>
              <StyledWeaponContainer>
                <StyledWeaponImage src="/modal/weapon.png" alt="weapon" loading="lazy" />
              </StyledWeaponContainer>
              <StyledEffectContainer>
                <StyledEffectImage src="/modal/effect.png" alt="effect" loading="lazy" />
              </StyledEffectContainer>
            </StyledFlexContainer>
            <div>
              <StyledTitleImage
                src="/modal/work_title.png"
                alt="タスクは武器で、プロジェクトはモンスター!?"
                loading="lazy"
              />
            </div>
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
  align-items: flex-end;
`
const StyledTitleImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(677)};
  padding-top: ${calculateMinSizeBasedOnFigma(8)};
`
const StyledDragonImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(261)};
`
const StyledWeaponImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(332)};
`
const StyledWeaponContainer = styled.div`
  transform: translateY(20%);
`
const StyledEffectContainer = styled.div`
  transform: translateY(20%);
`
const StyledEffectImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(350)};
`
const StyledTextImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: ${calculateMinSizeBasedOnFigma(200)};
`
const StyledTextImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(491)};
`
