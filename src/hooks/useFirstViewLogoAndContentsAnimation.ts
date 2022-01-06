import { useMemo, useCallback } from 'react'
import gsap from 'gsap'
import { scrollTrigger } from 'consts/scrollTrigger'
import { moveAsScrollScrollTrigger, MOVE_AS_SCROLL_SCROLL_PX } from 'consts/scrollTrigger'
import {
  getLogoAndContentsPerInnerPcWidthRatio,
  getLogoAndContentsAspectRatio,
  getLogoAndContentsXPerInnerPcWidthRatio,
  getAspectLogoPositionRatio,
} from 'utils/getFirstViewSizeRatio'

type UseFirstViewLogoAndContentsAnimationArg = {
  innerPcLeft: number
  innerPcTop: number
  innerPcWidth: number
  innerPcAnimatedTop: number
  innerPcAnimatedLeft: number
  innerWidth: number
  animatedBgSizeRatio: number
}

type UseFirstViewLogoAndContentsAnimationReturn = {
  addLogoAndContentsAnimation: () => void
  addMovingLogoAndContentsAsScrollAnimation: () => void
}

type UseFirstViewLogoAndContentsAnimation = (
  arg: UseFirstViewLogoAndContentsAnimationArg,
) => UseFirstViewLogoAndContentsAnimationReturn

/** ファーストビューで画面がズームされた時のロゴと目次部分のアニメーションを計算する */
export const useFirstViewLogoAndContentsAnimation: UseFirstViewLogoAndContentsAnimation = ({
  innerPcLeft,
  innerPcTop,
  innerPcWidth,
  innerPcAnimatedLeft,
  innerPcAnimatedTop,
  innerWidth,
  animatedBgSizeRatio,
}) => {
  const logoPerInnerPcWidth = getLogoAndContentsPerInnerPcWidthRatio()
  const logoAndContentsAspectRatio = getLogoAndContentsAspectRatio()
  const logoXPerInnerPcWidth = getLogoAndContentsXPerInnerPcWidthRatio()
  const aspectLogoPositionRatio = getAspectLogoPositionRatio()

  const width = useMemo<number>(() => {
    return innerPcWidth * logoPerInnerPcWidth
  }, [innerPcWidth])
  const height = useMemo<number>(() => {
    return width * logoAndContentsAspectRatio
  }, [width])

  const left = useMemo<number>(() => innerPcWidth * logoXPerInnerPcWidth, [innerPcWidth])
  const top = useMemo<number>(() => left * aspectLogoPositionRatio, [left])

  const animatedWidth = useMemo(() => width * animatedBgSizeRatio, [width, animatedBgSizeRatio])
  const animatedHeight = useMemo(() => height * animatedBgSizeRatio, [height, animatedBgSizeRatio])

  const animatedMaxWidth = useMemo<number>(() => {
    if (animatedWidth < innerWidth) {
      return animatedWidth
    } else {
      return innerWidth
    }
  }, [innerWidth, animatedWidth])
  const animatedMaxHeight = useMemo<number>(
    () => animatedMaxWidth * logoAndContentsAspectRatio,
    [animatedMaxWidth],
  )

  const animatedLeft = useMemo<number>(
    () => innerPcAnimatedLeft + left * animatedBgSizeRatio,
    [innerPcAnimatedLeft, left, animatedBgSizeRatio],
  )
  const animatedTop = useMemo<number>(
    () => innerPcAnimatedTop + top * animatedBgSizeRatio,
    [innerPcAnimatedTop, top, animatedBgSizeRatio],
  )

  const addLogoAndContentsAnimation = useCallback(() => {
    gsap.fromTo(
      '#first-view__logo-and-contents',
      {
        top: `max(${innerPcTop + top}px, 0px)`,
        left: `max(${innerPcLeft + left}px, 0px)`,
        width: `min(${width}px, ${animatedMaxWidth}px)`,
        height: `min(${height}px, ${animatedMaxHeight}px)`,
      },
      {
        scrollTrigger,
        top: `max(${animatedTop}px, 0px)`,
        left: `max(${animatedLeft}px, 0px)`,
        width: `min(${animatedWidth}px, ${animatedMaxWidth}px)`,
        height: `min(${animatedHeight}px, ${animatedMaxHeight}px)`,
      },
    )
  }, [
    innerPcLeft,
    innerPcTop,
    top,
    left,
    width,
    height,
    animatedTop,
    animatedLeft,
    animatedWidth,
    animatedHeight,
    animatedMaxWidth,
    animatedMaxHeight,
    innerPcAnimatedLeft,
    innerPcAnimatedTop,
    animatedBgSizeRatio,
  ])

  const addMovingLogoAndContentsAsScrollAnimation = useCallback(() => {
    gsap.fromTo(
      '#first-view__logo-and-contents-wrapper',
      {
        top: '0px',
      },
      {
        scrollTrigger: moveAsScrollScrollTrigger,
        top: `${-MOVE_AS_SCROLL_SCROLL_PX}px`,
        ease: 'none',
      },
    )
  }, [animatedTop])

  return { addLogoAndContentsAnimation, addMovingLogoAndContentsAsScrollAnimation }
}
