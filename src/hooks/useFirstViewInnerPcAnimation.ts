import { useMemo, useCallback } from 'react'
import {
  getInnerPcWidthRatio,
  getInnerPcAspectRatio,
  getInnerPcXPerWidthRatio,
  getAspectInnerPcPositionRatio,
  getViewBgAspectRatio,
} from 'utils/getFirstViewSizeRatio'
import gsap from 'gsap'
import { firstViewScrollTrigger } from 'consts/scrollTrigger'

type UseFirstViewInnerPcAnimation = {
  addInnerPcAnimation: () => void
  firstViewAnimationDummyHeight: number
  isFitIntoWindow: boolean
  innerPcLeft: number
  innerPcTop: number
  innerPcWidth: number
  innerPcAnimatedTop: number
  innerPcAnimatedLeft: number
  tailedHeight: number
  tailedInnerPcTop: number
  tailedInnerPcLeft: number
  animatedBgSizeRatio: number
}

/**
 * ファーストビュー内のPCのアニメーションを計算する
 */
export const useFirstViewInnerPcAnimation = (
  innerWidth: number,
  innerHeight: number,
): UseFirstViewInnerPcAnimation => {
  const windowAspectRatio = useMemo<number>(
    () => innerHeight / innerWidth,
    [innerWidth, innerHeight],
  )
  const widthRatio = getInnerPcWidthRatio()
  const innerPcAspectRatio = getInnerPcAspectRatio()
  const xPerWidthRatio = getInnerPcXPerWidthRatio()
  const aspectPositionRatio = getAspectInnerPcPositionRatio()
  const viewBgAspectRatio = getViewBgAspectRatio()

  const width = useMemo<number>(() => innerWidth * widthRatio, [innerWidth])
  const height = useMemo<number>(() => width * innerPcAspectRatio, [width])
  const viewBgHeight = useMemo<number>(() => innerWidth * viewBgAspectRatio, [innerWidth])
  const isFitIntoWindow = useMemo<boolean>(
    () => innerHeight <= viewBgHeight,
    [innerHeight, viewBgHeight],
  )

  const tailedHeight = useMemo<number>(
    () => (isFitIntoWindow ? viewBgHeight - innerHeight : innerHeight - viewBgHeight),
    [innerWidth, innerHeight],
  )

  const left = useMemo<number>(() => innerWidth * xPerWidthRatio, [innerWidth])
  const top = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return left * aspectPositionRatio - tailedHeight / 2
    } else {
      return left * aspectPositionRatio + tailedHeight / 2
    }
  }, [left, tailedHeight])

  const animatedBgSizeRatio = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return innerWidth / width
    } else {
      return innerHeight / height
    }
  }, [isFitIntoWindow, innerWidth, innerHeight, width, height])

  const tailedInnerPcTop = useMemo<number>(
    () => (height - width * windowAspectRatio) / 2,
    [width, height, windowAspectRatio],
  )

  const tailedInnerPcLeft = useMemo<number>(
    () => (width - height * (1 / windowAspectRatio)) / 2,
    [width, height, windowAspectRatio],
  )

  const innerPcAnimatedTop = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return -(tailedInnerPcTop * animatedBgSizeRatio)
    } else {
      return 0
    }
  }, [isFitIntoWindow, tailedInnerPcTop, animatedBgSizeRatio])

  const innerPcAnimatedLeft = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return 0
    } else {
      return -(tailedInnerPcLeft * animatedBgSizeRatio)
    }
  }, [isFitIntoWindow, tailedInnerPcTop, animatedBgSizeRatio])

  const firstViewAnimationDummyHeight = useMemo<number>(
    () => height * animatedBgSizeRatio + innerPcAnimatedTop,
    [height, animatedBgSizeRatio, innerPcAnimatedTop],
  )

  const addInnerPcAnimation = useCallback(() => {
    gsap.fromTo(
      '#first-view__inner-display',
      {
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`,
      },
      {
        scrollTrigger: firstViewScrollTrigger,
        top: `${innerPcAnimatedTop}px`,
        left: `${innerPcAnimatedLeft}px`,
        width: `${width * animatedBgSizeRatio}px`,
        height: `${height * animatedBgSizeRatio}px`,
      },
    )
  }, [
    top,
    left,
    width,
    height,
    tailedInnerPcTop,
    innerPcAnimatedLeft,
    animatedBgSizeRatio,
    innerPcAnimatedTop,
  ])

  return {
    addInnerPcAnimation,
    firstViewAnimationDummyHeight,
    isFitIntoWindow,
    innerPcLeft: left,
    innerPcTop: top,
    innerPcWidth: width,
    innerPcAnimatedTop,
    innerPcAnimatedLeft,
    tailedHeight,
    tailedInnerPcTop,
    tailedInnerPcLeft,
    animatedBgSizeRatio,
  }
}
