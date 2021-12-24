import React, { FCX } from 'react'
import styled from 'styled-components'
import { useCalculateFirstViewAnimatedSize } from 'hooks/useCalculateFirstViewAnimatedSize'
import { viewBackgroundImage } from 'consts/aspect'

type Props = {}

export const FirstViewHeader: FCX<Props> = ({ className }) => {
  useCalculateFirstViewAnimatedSize()

  return (
    <StyledFirstViewHeaderContainer id="first-view__container" className={className}>
      <StyledFirstViewBackground id="first-view__background" />
      <StyledBgWrapper>
        <StyledTopBg />
        <StyledFirstViewDummy />
        <StyledBottomBg />
      </StyledBgWrapper>
      <StyledInnerDisplay id="first-view__inner-display" />
    </StyledFirstViewHeaderContainer>
  )
}

const StyledFirstViewHeaderContainer = styled.header`
  position: relative;
  width: 100vw;
  height: 100vh;
`
const StyledFirstViewBackground = styled.div`
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_2};
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('/background/test.png');
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
  flex-grow: 1;
  width: 100vw;
  background-image: url('/background/first_view_top.svg');
  background-size: 100%;
  background-position: center bottom;
  background-repeat: repeat-y;
`
const StyledFirstViewDummy = styled.div`
  width: 100vw;
  height: calc(
    100vw * ${viewBackgroundImage.HEIGHT} / ${viewBackgroundImage.WIDTH} - 2px
  ); // 上下の要素に隙間が開いてしまうため-2pxする
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
const StyledInnerDisplay = styled.div`
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_3};
  position: absolute;
  background-image: url('/screen/screen_test.jpg');
  background-repeat: no-repeat;
  background-size: 100vw;
  background-position: center;
`
