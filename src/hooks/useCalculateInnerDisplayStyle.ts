import { useMemo } from 'react'
import {
  getInnerPcWidthRatio,
  getInnerPcAspectRatio,
  getInnerPcXPerWidthRatio,
  getAspectInnerPcPositionRatio,
  getViewBgAspectRatio,
} from 'utils/getFirstViewSizeRatio'

type UseCalculateInnerDisplayStyle = Record<
  'width' | 'height' | 'left' | 'top' | 'tailedHeight',
  number
>

export const useCalculateInnerDisplayStyle = (
  innerWidth: number,
  innerHeight: number,
): UseCalculateInnerDisplayStyle => {
  const widthRatio = getInnerPcWidthRatio()
  const innerPcAspectRatio = getInnerPcAspectRatio()
  const xPerWidthRatio = getInnerPcXPerWidthRatio()
  const aspectPositionRatio = getAspectInnerPcPositionRatio()
  const viewBgAspectRatio = getViewBgAspectRatio()

  const tailedHeight = useMemo(
    () => innerWidth * viewBgAspectRatio - innerHeight,
    [innerWidth, innerHeight],
  )
  const width = useMemo(() => innerWidth * widthRatio, [innerWidth])
  const height = useMemo(() => width * innerPcAspectRatio, [width])
  const left = useMemo(() => innerWidth * xPerWidthRatio, [innerWidth])
  const top = useMemo(() => left * aspectPositionRatio - tailedHeight / 2, [left, tailedHeight])

  return {
    top,
    left,
    width,
    height,
    tailedHeight,
  }
}
