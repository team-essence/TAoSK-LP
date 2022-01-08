import React, { FCX, useMemo } from 'react'
import { calculateVwBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import { mediaQuery } from 'utils/response/mediaQuery'
import { useWatchElementAspect } from 'hooks/useWatchElementAspect'
import styled, { css } from 'styled-components'

export const SiteFooter: FCX = ({ className }) => {
  const { sizeInspectedEl, height } = useWatchElementAspect<HTMLDivElement>()

  const year = useMemo(() => {
    const d = new Date()
    return d.getFullYear()
  }, [])

  return (
    <StyledFooter className={className}>
      <StyledFooterHead ref={sizeInspectedEl}>
        <StyledLogoContainer>
          <p>
            <a href="!#" target="_blank" rel="noreferrer">
              <StyledTAoSK src="/footer/taosk.svg" alt="taosk" />
            </a>
          </p>
          <p>
            <a href="https://www.hal.ac.jp/tokyo/campuslife/ms" target="_blank" rel="noreferrer">
              <StyledHalTokyo src="/footer/hal.svg" alt="hal" />
            </a>
          </p>
        </StyledLogoContainer>
        <StyledSNSContainer>
          <StyledPlay>
            <a href="!#" target="_blank" rel="noreferrer">
              TAoSKをプレイする
            </a>
          </StyledPlay>
          <p>
            <a href="https://www.instagram.com/hal_ms2022/" target="_blank" rel="noreferrer">
              <StyledSNS src="/footer/insta.svg" alt="insta" />
            </a>
          </p>
          <p>
            <a href="https://github.com/team-essence" target="_blank" rel="noreferrer">
              <StyledSNS src="/footer/github.svg" alt="github" />
            </a>
          </p>
        </StyledSNSContainer>
      </StyledFooterHead>
      <StyledBorder />
      <StyledCopyright height={height}>
        &copy; {year} H458 TAoSK All Rights Reserved
      </StyledCopyright>
    </StyledFooter>
  )
}

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  ${mediaQuery.sm`
    display: block;
  `}
`
const StyledFooter = styled.footer`
  position: relative;
  height: ${calculateVwBasedOnFigma(120)};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.MINE_SHAFT};
  ${mediaQuery.md`
    height: ${calculateVwBasedOnFigma(160)};
  `}
  ${mediaQuery.sm`
    height: ${calculateVwBasedOnFigma(700)};
  `}
`
const StyledFooterHead = styled(FlexContainer)`
  justify-content: space-between;
  padding: ${calculateVwBasedOnFigma(16)} ${calculateVwBasedOnFigma(64)};
  ${mediaQuery.sm`
    padding: ${calculateVwBasedOnFigma(80)} ${calculateVwBasedOnFigma(150)};
  `}
`
const StyledLogoContainer = styled(FlexContainer)`
  gap: ${calculateVwBasedOnFigma(40)};
  ${mediaQuery.sm`
    display: flex;
    gap: ${calculateVwBasedOnFigma(40)};
    justify-content: center;
  `}
`
const StyledSNSContainer = styled(FlexContainer)`
  gap: ${calculateVwBasedOnFigma(40)};
  ${mediaQuery.sm`
    display: flex;
    flex-direction: row-reverse;
    gap: ${calculateVwBasedOnFigma(80)};
    justify-content: center;
    margin-top: ${calculateVwBasedOnFigma(100)};
  `}
`
const StyledTAoSK = styled.img`
  width: ${calculateVwBasedOnFigma(117)};
  ${mediaQuery.sm`
    width: ${calculateVwBasedOnFigma(440)};
  `}
`
const StyledHalTokyo = styled.img`
  width: ${calculateVwBasedOnFigma(146)};
  ${mediaQuery.sm`
    width: ${calculateVwBasedOnFigma(490)};
  `}
`
const StyledSNS = styled.img`
  width: ${calculateVwBasedOnFigma(30)};
  ${mediaQuery.sm`
    width: ${calculateVwBasedOnFigma(110)};
  `}
`
const StyledPlay = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZES.SIZE_16};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY};
  ${mediaQuery.sm`
    font-size: ${calculateVwBasedOnFigma(50)};
    padding-bottom: ${calculateVwBasedOnFigma(16)};
  `}
`
const StyledBorder = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER.DOVE_GRAY};
`
const StyledCopyright = styled.p<{ height: number }>`
  display: grid;
  place-items: center;
  font-size: ${({ theme }) => theme.FONT_SIZES.SIZE_10};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.BOLD};
  ${({ height, theme }) =>
    css`
      height: calc(${calculateVwBasedOnFigma(120)} - ${height + 2}px);
      color: ${theme.COLORS.TEXT.WHITE};
      ${mediaQuery.md`
        font-size: 10px;
        height: calc(${calculateVwBasedOnFigma(160)} - ${height + 2}px);
      `}
      ${mediaQuery.sm`
        font-size: ${calculateVwBasedOnFigma(26)};
        height: ${calculateVwBasedOnFigma(142)};
      `}
    `}
`
