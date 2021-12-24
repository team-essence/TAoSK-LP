import { useMemo } from 'react'
import {
  getInnerPcWidthRatio,
  getInnerPcAspectRatio,
  getInnerPcXPerWidthRatio,
  getAspectInnerPcPositionRatio,
  getViewBgAspectRatio,
} from 'utils/getFirstViewSizeRatio'

type UseCalculateInnerPcStyle = Record<
  'width' | 'height' | 'left' | 'top' | 'tailedHeight' | 'viewBgHeight',
  number
>

/**
 * ファーストビュー内のPCの初期位置と初期サイズを計算する
 */
export const useCalculateInnerPcStyle = (
  innerWidth: number,
  innerHeight: number,
): UseCalculateInnerPcStyle => {
  const widthRatio = getInnerPcWidthRatio()
  const innerPcAspectRatio = getInnerPcAspectRatio()
  const xPerWidthRatio = getInnerPcXPerWidthRatio()
  const aspectPositionRatio = getAspectInnerPcPositionRatio()
  const viewBgAspectRatio = getViewBgAspectRatio()

  const width = useMemo(() => innerWidth * widthRatio, [innerWidth])
  const height = useMemo(() => width * innerPcAspectRatio, [width])
  const viewBgHeight = useMemo(() => innerWidth * viewBgAspectRatio, [innerWidth])

  const tailedHeight = useMemo(() => {
    if (innerHeight <= viewBgHeight) {
      return viewBgHeight - innerHeight
    } else {
      return innerHeight - viewBgHeight
    }
  }, [innerWidth, innerHeight])

  const left = useMemo(() => innerWidth * xPerWidthRatio, [innerWidth])
  const top = useMemo(() => {
    if (innerHeight <= viewBgHeight) {
      return left * aspectPositionRatio - tailedHeight / 2
    } else {
      return left * aspectPositionRatio + tailedHeight / 2
    }
  }, [left, tailedHeight])

  return {
    top,
    left,
    width,
    height,
    tailedHeight,
    viewBgHeight,
  }
}
