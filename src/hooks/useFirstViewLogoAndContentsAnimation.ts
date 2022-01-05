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
  animatedBgSizeRatio,
}) => {
  const logoPerInnerPcWidth = getLogoAndContentsPerInnerPcWidthRatio()
  const logoAspectRatio = getLogoAndContentsAspectRatio()
  const logoXPerInnerPcWidth = getLogoAndContentsXPerInnerPcWidthRatio()
  const aspectLogoPositionRatio = getAspectLogoPositionRatio()

  const width = useMemo<number>(() => innerPcWidth * logoPerInnerPcWidth, [innerPcWidth])
  const height = useMemo<number>(() => width * logoAspectRatio, [width])
  const left = useMemo<number>(() => innerPcWidth * logoXPerInnerPcWidth, [innerPcWidth])
  const top = useMemo<number>(() => left * aspectLogoPositionRatio, [left])
  const animatedLeft = useMemo<number>(
    () => left * animatedBgSizeRatio,
    [left, animatedBgSizeRatio],
  )
  const animatedTop = useMemo<number>(() => top * animatedBgSizeRatio, [top, animatedBgSizeRatio])

  const addLogoAndContentsAnimation = useCallback(() => {
    gsap.fromTo(
      '#first-view__logo-and-contents',
      {
        top: `${innerPcTop + top}px`,
        left: `${innerPcLeft + left}px`,
        width: `${width}px`,
        height: `${height}px`,
      },
      {
        scrollTrigger,
        top: `${innerPcAnimatedTop + animatedTop}px`,
        left: `${innerPcAnimatedLeft + animatedLeft}px`,
        width: `${width * animatedBgSizeRatio}px`,
        height: `${height * animatedBgSizeRatio}px`,
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
    innerPcAnimatedLeft,
    innerPcAnimatedTop,
    animatedBgSizeRatio,
  ])

  const addMovingLogoAndContentsAsScrollAnimation = useCallback(() => {
    gsap.fromTo(
      '#first-view__logo-and-contents',
      {
        top: `${innerPcAnimatedTop + animatedTop}px`,
      },
      {
        scrollTrigger: moveAsScrollScrollTrigger,
        top: `${-MOVE_AS_SCROLL_SCROLL_PX}px`,
        ease: 'none',
      },
    )
  }, [innerPcAnimatedTop, animatedTop])

  return { addLogoAndContentsAnimation, addMovingLogoAndContentsAsScrollAnimation }
}
