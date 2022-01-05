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
                src="/modal/mobile/work_mobile_title.svg"
                alt="HP,MPを脳波でリアルタイム解析"
              />
            </StyledTitleImageContainer>
            <div>
              <StyledMonsterVideoContainer>
                <video loop autoPlay muted playsInline preload="auto">
                  <source src="/mp4/monster.mp4" type="video/mp4" />
                  <p>Your browser doesn&lsquo;t support HTML5 video.</p>
                </video>
              </StyledMonsterVideoContainer>
            </div>

            <StyledRightContainer>
              <div>
                <StyledWeaponImage src="/modal/mobile/work_mobile_weapon.png" alt="weapon" />
              </div>
              <div>
                <StyledAttackVideoContainer>
                  <video loop autoPlay muted playsInline>
                    <source src="/mp4/attack.mp4" type="video/mp4" />
                    <p>Your browser doesn&lsquo;t support HTML5 video.</p>
                  </video>
                </StyledAttackVideoContainer>
              </div>
            </StyledRightContainer>
            <StyledTextImageContainer>
              <StyledTextImage
                src="/modal/mobile/work_mobile_text.svg"
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
  margin-top: ${calculateMinSizeBasedOnFigma(24)};
`
const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: ${calculateMinSizeBasedOnFigma(332)};
  right: 0;
`

const StyledMonsterVideoContainer = styled.div`
  width: ${calculateMinSizeBasedOnFigma(620)};
  height: ${calculateMinSizeBasedOnFigma(880)};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${calculateMinSizeBasedOnFigma(8)};
  border: solid ${calculateMinSizeBasedOnFigma(1)} ${({ theme }) => theme.COLORS.BORDER.MINE_SHAFT};

  video {
    width: ${calculateMinSizeBasedOnFigma(570)};
    height: ${calculateMinSizeBasedOnFigma(820)};
    object-fit: cover;
    border-radius: ${calculateMinSizeBasedOnFigma(8)};
  }
`

const StyledAttackVideoContainer = styled.div`
  width: ${calculateMinSizeBasedOnFigma(610)};
  height: ${calculateMinSizeBasedOnFigma(400)};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${calculateMinSizeBasedOnFigma(8)};
  border: solid ${calculateMinSizeBasedOnFigma(1)} ${({ theme }) => theme.COLORS.BORDER.MINE_SHAFT};

  video {
    width: ${calculateMinSizeBasedOnFigma(560)};
    height: ${calculateMinSizeBasedOnFigma(350)};
    object-fit: cover;
    border-radius: ${calculateMinSizeBasedOnFigma(8)};
  }
`
