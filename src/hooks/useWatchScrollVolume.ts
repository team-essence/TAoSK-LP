import { useState, useEffect, useRef, useCallback } from 'react'

// export const useWatchScrollVolume = () => {
//   const [scrollVolume, setScrollVolume] = useState<number>(0)
//   const isComponentMounted = useRef<boolean>(false)

//   const isScrollToggle = useCallback(() => {
//     if (isComponentMounted.current) return
//     isComponentMounted.current = true
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop
//     requestAnimationFrame(() => {
//       setScrollVolume(scrollTop)
//       isComponentMounted.current = false
//     })
//   }, [])

//   useEffect(() => {
//     document.addEventListener('scroll', isScrollToggle)
//     return () => {
//       document.removeEventListener('scroll', isScrollToggle)
//     }
//   }, [])

//   return { scrollVolume }
// }
