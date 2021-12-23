import { useRef, useMemo, useCallback, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useWatchInnerAspect } from 'hooks/useWatchInnerAspect'
import { useCalculateInnerDisplayStyle } from 'hooks/useCalculateInnerDisplayStyle'

type UseCalculateFirstViewAnimatedSizeReturn = {
  innerDisplayStyle: Omit<ReturnType<typeof useCalculateInnerDisplayStyle>, 'tailedHeight'>
}

export const useCalculateFirstViewAnimatedSize = (): UseCalculateFirstViewAnimatedSizeReturn => {
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
  const innerPcCenterHeightPosition = useMemo(() => {
    const top = innerDisplayStyle.top + tailedHeight / 2
    const preservedScreenBgHeight = innerDisplayStyle.width * windowAspectRatio
    const tailedInnerPcTop = (innerDisplayStyle.height - preservedScreenBgHeight) / 2

    return -((top + tailedInnerPcTop) * animatedBgSizeRatio)
  }, [
    innerDisplayStyle.top,
    innerDisplayStyle.width,
    innerDisplayStyle.height,
    tailedHeight,
    windowAspectRatio,
    animatedBgSizeRatio,
  ])
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
          end: '200px',
          markers: true,
          pin: true,
          scrub: true,
        },

        backgroundSize: `${animatedBgSizeRatio * 100}%`,
        backgroundPosition: `${innerPcCenterWidthPosition}px ${innerPcCenterHeightPosition}px`,
      },
    )
  }, [tailedHeight, animatedBgSizeRatio, innerPcCenterWidthPosition, innerPcCenterHeightPosition])

  useEffect(() => {
    if (!isRegistered.current) {
      gsap.registerPlugin(ScrollTrigger)
      isRegistered.current = true
    }
    firstViewAnimation()
  }, [firstViewAnimation])

  return { innerDisplayStyle }
}
