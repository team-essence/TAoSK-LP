import { useState } from 'react'
import { screenImages } from 'consts/screenImages'
import { useInterval } from 'hooks/useInterval'

type UseChangeScreenImageReturn = {
  screenImage: string
}

export const useChangeScreenImage = (): UseChangeScreenImageReturn => {
  const [count, setCount] = useState<number>(1)
  const [screenImage, setScreenImages] = useState<string>(screenImages[0])

  useInterval(() => {
    if (count !== screenImages.length - 1) {
      setCount(count + 1)
    } else {
      setCount(0)
    }
    setScreenImages(screenImages[count])
  }, 3000)

  return { screenImage }
}
