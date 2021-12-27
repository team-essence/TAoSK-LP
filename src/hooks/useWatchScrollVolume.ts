import { useState, useEffect, useRef, useCallback } from 'react'

type UseWatchScrollVolumeReturn = {
  scrollVolume: number
}

export const useWatchScrollVolume = (): UseWatchScrollVolumeReturn => {
  const [scrollVolume, setScrollVolume] = useState<number>(0)
  const isComponentMounted = useRef<boolean>(false)

  const getScrollVolume = useCallback(() => {
    if (isComponentMounted.current) return
    isComponentMounted.current = true

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    requestAnimationFrame(() => {
      setScrollVolume(scrollTop)
      isComponentMounted.current = false
    })
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', getScrollVolume)
    return () => {
      document.removeEventListener('scroll', getScrollVolume)
    }
  }, [])

  return { scrollVolume }
}
