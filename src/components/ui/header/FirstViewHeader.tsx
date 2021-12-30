import React, { useEffect, Dispatch, FCX, SetStateAction } from 'react'
import { scrollTriggerEndPx } from 'consts/scrollTrigger'
import { useCalculateFirstViewAnimatedSize } from 'hooks/useCalculateFirstViewAnimatedSize'
import { useWatchScrollVolume } from 'hooks/useWatchScrollVolume'
import { useChangeScreenImage } from 'hooks/useChangeScreenImage'
import styled, { css } from 'styled-components'

type Props = {
  setHasFirstViewAnimationDone: Dispatch<SetStateAction<boolean>>
}

export const FirstViewHeader: FCX<Props> = ({ className, setHasFirstViewAnimationDone }) => {
  const { scrollVolume } = useWatchScrollVolume()
  const { screenImage } = useChangeScreenImage()
  const { innerHeight } = useCalculateFirstViewAnimatedSize()

  useEffect(() => {
    setHasFirstViewAnimationDone(scrollVolume >= scrollTriggerEndPx)
  }, [scrollVolume])

  return (
    <StyledFirstViewHeaderContainer
      id="first-view__container"
      className={className}
      height={innerHeight}>
      <StyledFirstViewBackground id="first-view__background" />
      <StyledBgWrapper>
        <StyledTopBg id="first-view__top-bg" />
        <StyledFirstViewDummy id="first-view__background-dummy" />
        <StyledBottomBg id="first-view__bottom-bg" />
      </StyledBgWrapper>
      <StyledInnerDisplay
        id="first-view__inner-display"
        scrollVolume={scrollVolume}
        screenImage={screenImage}
      />
    </StyledFirstViewHeaderContainer>
  )
}

const StyledFirstViewHeaderContainer = styled.header<{ height: number }>`
  position: relative;
  width: 100vw;
  height: ${({ height }) => height}px;
`
const StyledFirstViewBackground = styled.div`
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_2};
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('/background/first_view.png');
  background-repeat: no-repeat;
`
// StyledFirstViewHeaderContainerにflexを付与するとアニメーションが崩れるため、wrapperを挟む必要がある
const StyledBgWrapper = styled.div`
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_1};
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const StyledTopBg = styled.div`
  top: 10px;
  width: 100vw;
  background-image: url('/background/first_view_top.svg');
  background-size: 100%;
  background-position: center bottom;
  background-repeat: repeat-y;
`
const StyledFirstViewDummy = styled.div`
  width: 100vw;
  background-color: transparent;
  background-repeat: no-repeat;
`
const StyledBottomBg = styled.div`
  flex-grow: 1;
  width: 100%;
  background-image: url('/background/first_view_bottom.svg');
  background-size: 100%;
  background-position: center top;
  background-repeat: repeat-y;
`
const StyledInnerDisplay = styled.div<{ scrollVolume: number; screenImage: string }>`
  ${({ theme, scrollVolume, screenImage }) =>
    css`
      background-image: url(${screenImage});
      position: absolute;
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      transition: background-image 0.5s;
      z-index: ${theme.Z_INDEX.INDEX_3};
    `}
`
