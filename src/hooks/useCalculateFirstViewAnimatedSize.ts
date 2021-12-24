import { useRef, useMemo, useCallback, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useWatchInnerAspect } from 'hooks/useWatchInnerAspect'
import { useCalculateInnerPcStyle } from 'hooks/useCalculateInnerPcStyle'

/**
 * ファーストビューでスクロールした時に画面内のPCがピッタリ実際の画面に収まるような拡大率・位置を計算し、アニメーションを付与する
 */
export const useCalculateFirstViewAnimatedSize = (): void => {
  const { innerWidth, innerHeight } = useWatchInnerAspect()
  const windowAspectRatio = useMemo<number>(
    () => innerHeight / innerWidth,
    [innerWidth, innerHeight],
  )
  const { tailedHeight, viewBgHeight, isFitIntoWindow, ...innerPcStyle } = useCalculateInnerPcStyle(
    innerWidth,
    innerHeight,
  )

  const initialViewBgPositionTop = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return -(tailedHeight / 2)
    } else {
      return tailedHeight / 2
    }
  }, [innerHeight, innerPcStyle.height, tailedHeight])

  const animatedBgSizeRatio = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return innerWidth / innerPcStyle.width
    } else {
      return innerHeight / innerPcStyle.height
    }
  }, [innerWidth, innerPcStyle.width])

  const tailedInnerPcTop = useMemo<number>(
    () => (innerPcStyle.height - innerPcStyle.width * windowAspectRatio) / 2,
    [innerPcStyle.width, innerPcStyle.height, windowAspectRatio],
  )

  const tailedInnerPcLeft = useMemo<number>(
    () => (innerPcStyle.width - innerPcStyle.height * (1 / windowAspectRatio)) / 2,
    [innerPcStyle.width, innerPcStyle.height],
  )

  const innerPcAnimatedWidthPosition = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return -(innerPcStyle.left * animatedBgSizeRatio)
    } else {
      return -(innerPcStyle.left + tailedInnerPcLeft) * animatedBgSizeRatio
    }
  }, [tailedInnerPcLeft, innerPcStyle.left, animatedBgSizeRatio])

  const innerPcAnimatedHeightPosition = useMemo<number>(() => {
    if (isFitIntoWindow) {
      const top = innerPcStyle.top + tailedHeight / 2
      return -((top + tailedInnerPcTop) * animatedBgSizeRatio)
    } else {
      return -(innerPcStyle.top - tailedHeight / 2) * animatedBgSizeRatio
    }
  }, [tailedInnerPcTop, animatedBgSizeRatio])

  const innerPcAnimatedTop = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return -tailedInnerPcTop
    } else {
      return 0
    }
  }, [tailedInnerPcTop])

  const innerPcAnimatedLeft = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return 0
    } else {
      return -(tailedInnerPcLeft * animatedBgSizeRatio)
    }
  }, [innerPcStyle.left, tailedInnerPcTop])

  const isRegistered = useRef<boolean>(false)

  const firstViewAnimation = useCallback(() => {
    if (!innerWidth || !innerHeight) return

    // それぞれのCSSプロパティの値は、アニメーション前と後で単位を合わせないと予期したスタイルにならない
    gsap.fromTo(
      '#first-view__background',
      {
        backgroundSize: '100%',
        backgroundPosition: `0px ${initialViewBgPositionTop}px`,
      },
      {
        scrollTrigger: {
          trigger: '#first-view__container',
          start: 'top',
          end: '1000px',
          markers: true,
          pin: true,
          scrub: true,
        },

        backgroundSize: `${animatedBgSizeRatio * 100}%`,
        backgroundPosition: `${innerPcAnimatedWidthPosition}px ${innerPcAnimatedHeightPosition}px`,
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
        scrollTrigger: {
          trigger: '#first-view__container',
          start: 'top',
          end: '1000px',
          markers: true,
          pin: true,
          scrub: true,
        },
        top: `${innerPcAnimatedTop}px`,
        left: `${innerPcAnimatedLeft}px`,
        width: `${innerPcStyle.width * animatedBgSizeRatio}px`,
        height: `${innerPcStyle.height * animatedBgSizeRatio}px`,
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
    innerPcAnimatedWidthPosition,
    innerPcAnimatedHeightPosition,
    innerPcAnimatedTop,
  ])

  useEffect(() => {
    if (!isRegistered.current) {
      gsap.registerPlugin(ScrollTrigger)
      isRegistered.current = true
    }
    firstViewAnimation()
  }, [firstViewAnimation])
}
