import { useRef, useMemo, useCallback, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {
  scrollTrigger,
  dotBlurScrollTrigger,
  illustBlurScrollTrigger,
  fixedToAbsoluteScrollTrigger,
} from 'consts/scrollTrigger'
import { useWatchInnerAspect } from 'hooks/useWatchInnerAspect'
import { useCalculateInnerPcStyle } from 'hooks/useCalculateInnerPcStyle'
import { getViewBgAspectRatio } from 'utils/getFirstViewSizeRatio'
import { FIXED_TO_ABSOLUTE_SCROLL_PX } from 'consts/scrollTrigger'

type UseCalculateFirstViewAnimatedSizeReturn = {
  innerHeight: number
  firstViewAnimationDummyHeight: number
}

/**
 * ファーストビューでスクロールした時に画面内のPCがピッタリ実際の画面に収まるような拡大率・位置を計算し、アニメーションを付与する
 */
export const useCalculateFirstViewAnimatedSize = (): UseCalculateFirstViewAnimatedSizeReturn => {
  const { innerWidth, innerHeight } = useWatchInnerAspect()
  const windowAspectRatio = useMemo<number>(
    () => innerHeight / innerWidth,
    [innerWidth, innerHeight],
  )
  const { tailedHeight, isFitIntoWindow, ...innerPcStyle } = useCalculateInnerPcStyle(
    innerWidth,
    innerHeight,
  )

  const initialViewBgPositionTop = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return -(tailedHeight / 2)
    } else {
      return tailedHeight / 2
    }
  }, [isFitIntoWindow, tailedHeight])

  const animatedBgSizeRatio = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return innerWidth / innerPcStyle.width
    } else {
      return innerHeight / innerPcStyle.height
    }
  }, [isFitIntoWindow, innerWidth, innerHeight, innerPcStyle.width, innerPcStyle.height])

  const tailedInnerPcTop = useMemo<number>(
    () => (innerPcStyle.height - innerPcStyle.width * windowAspectRatio) / 2,
    [innerPcStyle.width, innerPcStyle.height, windowAspectRatio],
  )

  const tailedInnerPcLeft = useMemo<number>(
    () => (innerPcStyle.width - innerPcStyle.height * (1 / windowAspectRatio)) / 2,
    [innerPcStyle.width, innerPcStyle.height, windowAspectRatio],
  )

  const innerPcAnimatedXPosition = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return -(innerPcStyle.left * animatedBgSizeRatio)
    } else {
      return -(innerPcStyle.left + tailedInnerPcLeft) * animatedBgSizeRatio
    }
  }, [isFitIntoWindow, tailedInnerPcLeft, innerPcStyle.left, animatedBgSizeRatio])

  const innerPcAnimatedYPosition = useMemo<number>(() => {
    if (isFitIntoWindow) {
      const top = innerPcStyle.top + tailedHeight / 2
      return -((top + tailedInnerPcTop) * animatedBgSizeRatio)
    } else {
      return -(innerPcStyle.top - tailedHeight / 2) * animatedBgSizeRatio
    }
  }, [isFitIntoWindow, innerPcStyle.top, tailedHeight, tailedInnerPcTop, animatedBgSizeRatio])

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
  }, [isFitIntoWindow, innerPcStyle.left, tailedInnerPcTop, animatedBgSizeRatio])

  const firstViewAnimationDummyHeight = useMemo<number>(
    () => innerPcStyle.height * animatedBgSizeRatio + innerPcAnimatedTop,
    [innerPcStyle.height, animatedBgSizeRatio, innerPcAnimatedTop],
  )

  const isRegistered = useRef<boolean>(false)

  const addFirstViewAnimation = useCallback(() => {
    if (!innerWidth || !innerHeight) return

    const allTriggers = ScrollTrigger.getAll()
    for (let i = 0; i < allTriggers.length; i++) {
      allTriggers[i].kill(true)
    }
    const viewBgAspectRatio = getViewBgAspectRatio()

    // それぞれのCSSプロパティの値は、アニメーション前と後で単位を合わせないと予期したスタイルにならない
    gsap.fromTo(
      '#first-view__background',
      {
        backgroundSize: '100%',
        backgroundPosition: `0px ${initialViewBgPositionTop}px`,
      },
      {
        scrollTrigger,
        backgroundSize: `${animatedBgSizeRatio * 100}%`,
        backgroundPosition: `${innerPcAnimatedXPosition}px ${innerPcAnimatedYPosition}px`,
      },
    )
    gsap.fromTo(
      '#first-view__inner-display',
      {
        top: `${innerPcStyle.top}px`,
        left: `${innerPcStyle.left}px`,
        width: `${innerPcStyle.width}px`,
        height: `${innerPcStyle.height}px`,
      },
      {
        scrollTrigger,
        top: `${innerPcAnimatedTop}px`,
        left: `${innerPcAnimatedLeft}px`,
        width: `${innerPcStyle.width * animatedBgSizeRatio}px`,
        height: `${innerPcStyle.height * animatedBgSizeRatio}px`,
      },
    )
    gsap.fromTo(
      '#first-view__top-bg',
      // 下の要素に隙間が開いてしまうため+10する
      {
        backgroundSize: '100%',
        height: `${initialViewBgPositionTop + 10}px`,
      },
      {
        scrollTrigger,
        backgroundSize: `${animatedBgSizeRatio * 100}%`,
        height: `${innerPcAnimatedYPosition + 10}px`,
      },
    )
    gsap.fromTo(
      '#first-view__background-dummy',
      // 上下の要素に隙間が開いてしまうため-20pxする
      { height: `calc(100vw * ${viewBgAspectRatio} - 20px)` },
      {
        scrollTrigger,
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
        scrollTrigger,
        top: '-20px',
        backgroundSize: `${animatedBgSizeRatio * 100}%`,
        height: `${innerPcAnimatedYPosition + 10}px`,
      },
    )
  }, [
    innerPcStyle.width,
    innerPcStyle.height,
    innerPcStyle.top,
    innerPcStyle.left,
    tailedInnerPcTop,
    innerPcAnimatedLeft,
    initialViewBgPositionTop,
    animatedBgSizeRatio,
    innerPcAnimatedXPosition,
    innerPcAnimatedYPosition,
    innerPcAnimatedTop,
    firstViewAnimationDummyHeight,
  ])

  const addBlurAnimation = useCallback(() => {
    gsap.fromTo(
      '#first-view__container',
      { position: 'fixed' },
      {
        scrollTrigger,
        position: 'fixed',
      },
    )
    gsap.fromTo(
      '#first-view__inner-display',
      {
        filter: 'blur(15px)',
        backgroundImage: 'url("/screen/before.svg")',
      },
      {
        scrollTrigger: illustBlurScrollTrigger,
        filter: 'blur(0px)',
        backgroundImage: 'url("/screen/after.svg")',
      },
    )
    gsap.fromTo(
      '#first-view__inner-display',
      { filter: 'blur(0px)' },
      {
        scrollTrigger: dotBlurScrollTrigger,
        filter: 'blur(15px)',
      },
    )
    gsap.fromTo(
      '#first-view__container',
      {
        position: 'fixed',
        top: '0px',
      },
      {
        scrollTrigger: fixedToAbsoluteScrollTrigger,
        position: 'fixed',
        top: `${-FIXED_TO_ABSOLUTE_SCROLL_PX}px`,
        ease: 'none',
      },
    )
    gsap.fromTo(
      '#first-view__container',
      { top: '0px' },
      { scrollTrigger: illustBlurScrollTrigger, top: '0px' },
    )
  }, [])

  useEffect(() => {
    if (!isRegistered.current) {
      gsap.registerPlugin(ScrollTrigger)
      isRegistered.current = true
    }
    addFirstViewAnimation()
    addBlurAnimation()
  }, [addFirstViewAnimation, addBlurAnimation])

  return { innerHeight, firstViewAnimationDummyHeight }
}
