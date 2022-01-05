import { useMemo, useCallback } from 'react'
import gsap from 'gsap'
import { scrollTrigger } from 'consts/scrollTrigger'
import { moveAsScrollScrollTrigger, MOVE_AS_SCROLL_SCROLL_PX } from 'consts/scrollTrigger'
import {
  getLogoPerInnerPcWidthRatio,
  getLogoAspectRatio,
  getLogoXPerInnerPcWidthRatio,
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

export const useFirstViewLogoAndContentsAnimation: UseFirstViewLogoAndContentsAnimation = ({
  innerPcLeft,
  innerPcTop,
  innerPcWidth,
  innerPcAnimatedLeft,
  innerPcAnimatedTop,
  animatedBgSizeRatio,
}) => {
  const logoPerInnerPcWidth = getLogoPerInnerPcWidthRatio()
  const logoAspectRatio = getLogoAspectRatio()
  const logoXPerInnerPcWidth = getLogoXPerInnerPcWidthRatio()
  const aspectLogoPositionRatio = getAspectLogoPositionRatio()

  const width = useMemo(() => innerPcWidth * logoPerInnerPcWidth, [innerPcWidth])
  const height = useMemo(() => width * logoAspectRatio, [width])
  const left = useMemo(() => innerPcWidth * logoXPerInnerPcWidth, [innerPcWidth])
  const top = useMemo(() => left * aspectLogoPositionRatio, [left])
  const animatedLeft = useMemo(() => left * animatedBgSizeRatio, [left, animatedBgSizeRatio])
  const animatedTop = useMemo(() => top * animatedBgSizeRatio, [top, animatedBgSizeRatio])

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
