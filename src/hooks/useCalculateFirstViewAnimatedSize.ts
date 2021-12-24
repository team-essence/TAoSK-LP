import { useRef, useMemo, useCallback, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useWatchInnerAspect } from 'hooks/useWatchInnerAspect'
import { useCalculateInnerDisplayStyle } from 'hooks/useCalculateInnerDisplayStyle'

export const useCalculateFirstViewAnimatedSize = (): void => {
  const { innerWidth, innerHeight } = useWatchInnerAspect()
  const windowAspectRatio = useMemo(() => innerHeight / innerWidth, [innerWidth, innerHeight])
  const { tailedHeight, ...innerDisplayStyle } = useCalculateInnerDisplayStyle(
    innerWidth,
    innerHeight,
  )
  const animatedBgSizeRatio = useMemo(
    () => innerWidth / innerDisplayStyle.width,
    [innerWidth, innerDisplayStyle.width],
  )
  const innerPcCenterWidthPosition = useMemo(
    () => -(innerDisplayStyle.left * animatedBgSizeRatio),
    [innerDisplayStyle.left, animatedBgSizeRatio],
  )
  const tailedInnerPcTop = useMemo(
    () => (innerDisplayStyle.height - innerDisplayStyle.width * windowAspectRatio) / 2,
    [
      innerDisplayStyle.top,
      innerDisplayStyle.width,
      innerDisplayStyle.height,
      tailedHeight,
      windowAspectRatio,
    ],
  )
  const innerPcCenterHeightPosition = useMemo(() => {
    const top = innerDisplayStyle.top + tailedHeight / 2
    return -((top + tailedInnerPcTop) * animatedBgSizeRatio)
  }, [tailedInnerPcTop, animatedBgSizeRatio])
  const isRegistered = useRef<boolean>(false)

  const firstViewAnimation = useCallback(() => {
    gsap.fromTo(
      '#first-view__background',
      {
        backgroundSize: '100%',
        backgroundPosition: `0px -${tailedHeight / 2}px`,
      },
      {
        scrollTrigger: {
          trigger: '#first-view__background',
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
          trigger: '#first-view__background',
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
    tailedHeight,
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
