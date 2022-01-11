import { useMemo, useCallback } from 'react'
import gsap from 'gsap'
import { firstViewScrollTrigger } from 'consts/scrollTrigger'
import { getViewBgAspectRatio } from 'utils/getFirstViewSizeRatio'

type UseFirstViewBackgroundAnimationArg = {
  existsVerticallyMarginOnAdjustToInnerWidth: boolean
  innerPcLeft: number
  innerPcTop: number
  tailedHeight: number
  tailedInnerPcTop: number
  tailedInnerPcLeft: number
  animatedBgSizeRatio: number
}

type UseFirstViewBackgroundAnimationReturn = {
  addFirstViewBackgroundAnimation: () => void
  addBackgroundDummyAnimation: () => void
}

type UseFirstViewBackgroundAnimation = (
  arg: UseFirstViewBackgroundAnimationArg,
) => UseFirstViewBackgroundAnimationReturn

/**
 * ファーストビューの背景画像のアニメーションを計算する
 */
export const useFirstViewBackgroundAnimation: UseFirstViewBackgroundAnimation = ({
  existsVerticallyMarginOnAdjustToInnerWidth,
  innerPcLeft,
  innerPcTop,
  tailedHeight,
  tailedInnerPcTop,
  tailedInnerPcLeft,
  animatedBgSizeRatio,
}) => {
  const initialViewBgPositionTop = useMemo<number>(() => {
    if (existsVerticallyMarginOnAdjustToInnerWidth) {
      return tailedHeight / 2
    } else {
      return -(tailedHeight / 2)
    }
  }, [existsVerticallyMarginOnAdjustToInnerWidth, tailedHeight])

  const innerPcAnimatedXPosition = useMemo<number>(() => {
    if (existsVerticallyMarginOnAdjustToInnerWidth) {
      return -(innerPcLeft + tailedInnerPcLeft) * animatedBgSizeRatio
    } else {
      return -(innerPcLeft * animatedBgSizeRatio)
    }
  }, [
    existsVerticallyMarginOnAdjustToInnerWidth,
    tailedInnerPcLeft,
    innerPcLeft,
    animatedBgSizeRatio,
  ])

  const innerPcAnimatedYPosition = useMemo<number>(() => {
    if (existsVerticallyMarginOnAdjustToInnerWidth) {
      return -(innerPcTop - tailedHeight / 2) * animatedBgSizeRatio
    } else {
      const top = innerPcTop + tailedHeight / 2
      return -((top + tailedInnerPcTop) * animatedBgSizeRatio)
    }
  }, [
    existsVerticallyMarginOnAdjustToInnerWidth,
    innerPcTop,
    tailedHeight,
    tailedInnerPcTop,
    animatedBgSizeRatio,
  ])

  const addFirstViewBackgroundAnimation = useCallback(() => {
    gsap.fromTo(
      '#first-view__background',
      {
        backgroundSize: '100%',
        backgroundPosition: `0px ${initialViewBgPositionTop}px`,
      },
      {
        scrollTrigger: firstViewScrollTrigger,
        backgroundSize: `${animatedBgSizeRatio * 100}%`,
        backgroundPosition: `${innerPcAnimatedXPosition}px ${innerPcAnimatedYPosition}px`,
      },
    )
  }, [
    initialViewBgPositionTop,
    animatedBgSizeRatio,
    innerPcAnimatedXPosition,
    innerPcAnimatedYPosition,
  ])

  const addBackgroundDummyAnimation = useCallback(() => {
    const viewBgAspectRatio = getViewBgAspectRatio()
    gsap.fromTo(
      '#first-view__top-bg',
      // 下の要素に隙間が開いてしまうため+10する
      {
        backgroundSize: '100%',
        height: `${initialViewBgPositionTop + 10}px`,
      },
      {
        scrollTrigger: firstViewScrollTrigger,
        backgroundSize: `${animatedBgSizeRatio * 100}%`,
        height: `${innerPcAnimatedYPosition + 10}px`,
      },
    )
    gsap.fromTo(
      '#first-view__background-dummy',
      // 上下の要素に隙間が開いてしまうため-20pxする
      { height: `calc(100vw * ${viewBgAspectRatio} - 20px)` },
      {
        scrollTrigger: firstViewScrollTrigger,
        height: `calc(100vw * ${viewBgAspectRatio * animatedBgSizeRatio} -20px)`,
      },
    )
    gsap.fromTo(
      '#first-view__bottom-bg',
      // 上の要素に隙間が開いてしまうため+10pxする
      {
        top: '-20px',
        backgroundSize: '100%',
        height: `${initialViewBgPositionTop + 10}px`,
      },
      {
        scrollTrigger: firstViewScrollTrigger,
        top: '-20px',
        backgroundSize: `${animatedBgSizeRatio * 100}%`,
        height: `${innerPcAnimatedYPosition + 10}px`,
      },
    )
  }, [initialViewBgPositionTop, animatedBgSizeRatio, innerPcAnimatedYPosition])

  return { addFirstViewBackgroundAnimation, addBackgroundDummyAnimation }
}
