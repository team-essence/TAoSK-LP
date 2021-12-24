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
  const { tailedHeight, viewBgHeight, isFitIntoWindow, ...innerDisplayStyle } =
    useCalculateInnerPcStyle(innerWidth, innerHeight)

  const initialViewBgPositionTop = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return -(tailedHeight / 2)
    } else {
      return tailedHeight / 2
    }
  }, [innerHeight, innerDisplayStyle.height, tailedHeight])

  const animatedBgSizeRatio = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return innerWidth / innerDisplayStyle.width
    } else {
      return innerHeight / innerDisplayStyle.height
    }
  }, [innerWidth, innerDisplayStyle.width])

  const innerPcCenterWidthPosition = useMemo<number>(() => {
    if (isFitIntoWindow) {
      return -(innerDisplayStyle.left * animatedBgSizeRatio)
    } else {
      const tailedInnerPcLeft =
        (innerDisplayStyle.width - innerDisplayStyle.height * (1 / windowAspectRatio)) / 2
      return -(innerDisplayStyle.left + tailedInnerPcLeft) * animatedBgSizeRatio
    }
  }, [
    innerDisplayStyle.width,
    innerDisplayStyle.height,
    innerDisplayStyle.left,
    animatedBgSizeRatio,
  ])

  const tailedInnerPcTop = useMemo<number>(
    () => (innerDisplayStyle.height - innerDisplayStyle.width * windowAspectRatio) / 2,
    [innerDisplayStyle.width, innerDisplayStyle.height, windowAspectRatio],
  )

  const innerPcCenterHeightPosition = useMemo<number>(() => {
    const top = innerDisplayStyle.top + tailedHeight / 2
    return -((top + tailedInnerPcTop) * animatedBgSizeRatio)
  }, [tailedInnerPcTop, animatedBgSizeRatio])

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
        backgroundPosition: `${innerPcCenterWidthPosition}px ${innerPcCenterHeightPosition}px`,
      },
    )
    gsap.fromTo(
      '#first-view__inner-display',
      {
        top: `${innerDisplayStyle.top}px`,
        left: `${innerDisplayStyle.left}px`,
        width: `${innerDisplayStyle.width}px`,
        height: `${innerDisplayStyle.height}px`,
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
        top: `-${tailedInnerPcTop}px`,
        left: '0px',
        width: `${innerDisplayStyle.width * animatedBgSizeRatio}px`,
        height: `${innerDisplayStyle.height * animatedBgSizeRatio}px`,
      },
    )
  }, [
    innerDisplayStyle.width,
    innerDisplayStyle.height,
    innerDisplayStyle.top,
    innerDisplayStyle.left,
    tailedInnerPcTop,
    initialViewBgPositionTop,
    animatedBgSizeRatio,
    innerPcCenterWidthPosition,
    innerPcCenterHeightPosition,
  ])

  useEffect(() => {
    if (!isRegistered.current) {
      gsap.registerPlugin(ScrollTrigger)
      isRegistered.current = true
    }
    firstViewAnimation()
  }, [firstViewAnimation])
}
