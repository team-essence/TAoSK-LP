import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  Dispatch,
  FCX,
  SetStateAction,
} from 'react'
import {
  FIRST_VIEW_SCROLL_TRIGGER_END_PX,
  DOT_BLUR_SCROLL_PX,
  ILLUST_BLUR_SCROLL_PX,
} from 'consts/scrollTrigger'
import { useCalculateFirstViewAnimatedSize } from 'hooks/useCalculateFirstViewAnimatedSize'
import { useWatchScrollVolume } from 'hooks/useWatchScrollVolume'
import { useChangeScreenImage } from 'hooks/useChangeScreenImage'
import {
  getContentsPerLogoAndContentsWidth,
  getContentsPerLogoAndContentsHeight,
} from 'utils/getFirstViewSizeRatio'
import styled, { css } from 'styled-components'

type ContentsType = 'aboutTAoSK' | 'concept' | 'start'

type Props = {
  setHasFirstViewAnimationDone: Dispatch<SetStateAction<boolean>>
}

export const FirstViewHeader: FCX<Props> = ({ className, setHasFirstViewAnimationDone }) => {
  const { scrollVolume } = useWatchScrollVolume()
  const { screenImage } = useChangeScreenImage()
  const { innerHeight, firstViewAnimationDummyHeight } = useCalculateFirstViewAnimatedSize()
  const [hasAnimatedFirstBlur, setHasAnimatedFirstBlur] = useState<boolean>(false)
  const contentsPath = useMemo<'dot' | 'illust'>(
    () => (hasAnimatedFirstBlur ? 'illust' : 'dot'),
    [hasAnimatedFirstBlur],
  )
  const [nowHovered, setNowHovered] = useState<ContentsType>('aboutTAoSK')

  const handleNowHovered = useCallback(
    (contentsType: ContentsType) => {
      if (hasAnimatedFirstBlur) setNowHovered(contentsType)
    },
    [hasAnimatedFirstBlur],
  )

  useEffect(() => {
    const firstBlurredScrollPosition = firstViewAnimationDummyHeight + DOT_BLUR_SCROLL_PX
    const firstViewAnimationDonePosition = firstBlurredScrollPosition + ILLUST_BLUR_SCROLL_PX
    setHasAnimatedFirstBlur(firstBlurredScrollPosition < scrollVolume)
    setHasFirstViewAnimationDone(firstViewAnimationDonePosition < scrollVolume)
  }, [firstViewAnimationDummyHeight, scrollVolume])

  return (
    <StyledAllWrapper className={className}>
      <StyledFirstViewHeaderContainer id="first-view__container" height={innerHeight}>
        <StyledFirstViewBackground id="first-view__background" />
        <StyledBgWrapper>
          <StyledTopBg id="first-view__top-bg" />
          <StyledFirstViewDummy id="first-view__background-dummy" />
          <StyledBottomBg id="first-view__bottom-bg" />
        </StyledBgWrapper>
        <StyledInnerDisplay id="first-view__inner-display" />
        <StyledInnerDisplayOverlay id="first-view__inner-display-overlay" />
      </StyledFirstViewHeaderContainer>

      <StyledLogoAndContentsContainer height={innerHeight}>
        <StyledLogoAndContents id="first-view__logo-and-contents">
          <StyledLogo src="/screen/top-logo.webp" alt="TAoSK" />

          <StyledContentsWrapper>
            <StyledContents>
              <StyledContent
                hasAnimatedFirstBlur={hasAnimatedFirstBlur}
                isHovered={nowHovered === 'aboutTAoSK'}
                onMouseEnter={() => handleNowHovered('aboutTAoSK')}>
                <StyledContentTextImg
                  alt="TAoSKとは"
                  src={`/contents/${contentsPath}/about-taosk.svg`}
                />
              </StyledContent>
              <StyledContent
                hasAnimatedFirstBlur={hasAnimatedFirstBlur}
                isHovered={nowHovered === 'concept'}
                onMouseEnter={() => handleNowHovered('concept')}>
                <StyledContentTextImg
                  alt="とくちょう"
                  src={`/contents/${contentsPath}/concept.svg`}
                />
              </StyledContent>
              <StyledContent
                hasAnimatedFirstBlur={hasAnimatedFirstBlur}
                isHovered={nowHovered === 'start'}
                onMouseEnter={() => handleNowHovered('start')}>
                <StyledContentTextImg
                  alt="はじめよう"
                  src={`/contents/${contentsPath}/lets-start.svg`}
                />
              </StyledContent>
            </StyledContents>
          </StyledContentsWrapper>
        </StyledLogoAndContents>
      </StyledLogoAndContentsContainer>

      {/* ファーストビューはposition: fixedで固定されているので、同じ高さ分dummyを設置してスクロールですぐに特徴セクションが現れないようにする */}
      <StyledAnimationDummyContainer>
        <StyledFirstViewAnimationDummy
          id="first-view__animation-dummy"
          height={firstViewAnimationDummyHeight}
        />
        <StyledDotBlurAnimationDummy id="first-view__dot-blur-animation-dummy" />
        <StyledIllustBlurAnimationDummy id="first-view__illust-blur-animation-dummy" />
      </StyledAnimationDummyContainer>
    </StyledAllWrapper>
  )
}

const StyledAllWrapper = styled.div`
  position: relative;
`

const StyledFirstViewHeaderContainer = styled.header<{ height: number }>`
  position: fixed;
  width: 100vw;
  height: ${({ height }) => height}px;
`
const StyledFirstViewBackground = styled.div`
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_2};
  position: absolute;
  top: 0;
  left: 0;
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
const StyledInnerDisplay = styled.div`
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_3};
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`
const StyledInnerDisplayOverlay = styled.div`
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_3};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const StyledLogoAndContentsContainer = styled.div<{ height: number }>`
  z-index: ${({ theme }) => theme.Z_INDEX.INDEX_4};
  position: fixed;
  width: 100vw;
  height: ${({ height }) => height}px;
`
const StyledLogoAndContents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const StyledLogo = styled.img`
  width: 100%;
`
const StyledContentsWrapper = styled.div`
  width: ${getContentsPerLogoAndContentsWidth() * 100}%;
  height: ${getContentsPerLogoAndContentsHeight() * 100}%;
  background-image: url('/contents/background.svg');
  background-size: 100% 100%;
`
const StyledContents = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4.4692734%;
  width: 100%;
  height: 100%;
  padding: 7.262569832%;
`
const StyledContent = styled.li<{ hasAnimatedFirstBlur: boolean; isHovered: boolean }>`
  flex-grow: 1;
  width: 100%;
  background-size: 100% 100%;
  text-align: right;

  ${({ hasAnimatedFirstBlur }) =>
    hasAnimatedFirstBlur &&
    css`
      cursor: pointer;
    `}

  ${({ isHovered }) =>
    isHovered &&
    css`
      background-image: url('/contents/hovered-background.svg');
    `}
`
const StyledContentTextImg = styled.img`
  object-fit: contain;
  width: 77.777777%;
  height: 100%;
`
const StyledAnimationDummyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
`
const StyledFirstViewAnimationDummy = styled.div<{ height: number }>`
  position: relative;
  width: 100px;
  height: ${({ height }) => height + FIRST_VIEW_SCROLL_TRIGGER_END_PX}px;
`
const StyledDotBlurAnimationDummy = styled.div`
  position: relative;
  width: 100px;
  height: ${DOT_BLUR_SCROLL_PX}px;
`
const StyledIllustBlurAnimationDummy = styled(StyledDotBlurAnimationDummy)`
  height: ${ILLUST_BLUR_SCROLL_PX}px;
`
