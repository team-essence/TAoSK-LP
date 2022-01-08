import React, { FCX } from 'react'
import { Modal } from 'components/ui/modal/Modal'
import { ROOT_MARGIN } from 'consts/rootMargin'
import { useInView } from 'react-intersection-observer'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import { Spacer } from 'components/ui/spacer/Spacer'
import { animation } from 'styles/animation/modalAnimation'
import styled from 'styled-components'

type Props = {}

export const WorkVisualizationModal: FCX<Props> = ({ className }) => {
  const { ref, inView } = useInView({
    rootMargin: ROOT_MARGIN,
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
              />
            </StyledTextImageContainer>
            <StyledFlexContainer>
              <div>
                <StyledMonsterVideoContainer>
                  <video loop autoPlay muted>
                    <source src="/mp4/monster.mp4" type="video/mp4" />
                    <p>Your browser doesn&lsquo;t support HTML5 video.</p>
                  </video>
                </StyledMonsterVideoContainer>

                <Spacer size={8} />
              </div>
              <StyledWeaponContainer>
                <StyledWeaponImage src="/modal/weapon.png" alt="weapon" />
              </StyledWeaponContainer>
              <StyledEffectContainer>
                <StyledAttackVideoContainer>
                  <video loop autoPlay muted preload="auto">
                    <source src="/mp4/attack.mp4" type="video/mp4" />
                    <p>Your browser doesn&lsquo;t support HTML5 video.</p>
                  </video>
                </StyledAttackVideoContainer>
              </StyledEffectContainer>
            </StyledFlexContainer>
            <div>
              <StyledTitleImage
                src="/modal/work_title.png"
                alt="タスクは武器で、プロジェクトはモンスター!?"
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
  justify-content: center;
  align-items: flex-end;
`
const StyledTitleImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(677)};
  ${animation.firstShownChildren}
`
const StyledWeaponImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(332)};
  ${animation.firstShownChildren}
`
const StyledWeaponContainer = styled.div`
  transform: translateY(20%);
`
const StyledEffectContainer = styled.div`
  transform: translateY(20%);
`
const StyledTextImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: ${calculateMinSizeBasedOnFigma(200)};
  ${animation.secondShownChildren}
`
const StyledTextImage = styled.img`
  width: ${calculateMinSizeBasedOnFigma(491)};
`

const StyledMonsterVideoContainer = styled.div`
  width: ${calculateMinSizeBasedOnFigma(261)};
  height: ${calculateMinSizeBasedOnFigma(313)};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${calculateMinSizeBasedOnFigma(4)};
  border: solid ${calculateMinSizeBasedOnFigma(1)} ${({ theme }) => theme.COLORS.BORDER.MINE_SHAFT};
  ${animation.firstShownChildren}

  video {
    width: ${calculateMinSizeBasedOnFigma(245)};
    height: ${calculateMinSizeBasedOnFigma(297)};
    object-fit: cover;
    border-radius: ${calculateMinSizeBasedOnFigma(4)};
  }
`

const StyledAttackVideoContainer = styled.div`
  width: ${calculateMinSizeBasedOnFigma(350)};
  height: ${calculateMinSizeBasedOnFigma(260)};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${calculateMinSizeBasedOnFigma(4)};
  border: solid ${calculateMinSizeBasedOnFigma(1)} ${({ theme }) => theme.COLORS.BORDER.MINE_SHAFT};
  ${animation.secondShownChildren}

  video {
    width: ${calculateMinSizeBasedOnFigma(334)};
    height: ${calculateMinSizeBasedOnFigma(244)};
    object-fit: cover;
    border-radius: ${calculateMinSizeBasedOnFigma(4)};
  }
`
