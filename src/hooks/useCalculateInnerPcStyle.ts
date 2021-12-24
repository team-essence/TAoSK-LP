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
> & { isFitIntoWindow: boolean }

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

  const width = useMemo<number>(() => innerWidth * widthRatio, [innerWidth])
  const height = useMemo<number>(() => width * innerPcAspectRatio, [width])
  const viewBgHeight = useMemo<number>(() => innerWidth * viewBgAspectRatio, [innerWidth])
  const isFitIntoWindow = useMemo<boolean>(
    () => innerHeight <= viewBgHeight,
    [innerHeight, viewBgHeight],
  )

  const tailedHeight = useMemo<number>(
    () => (isFitIntoWindow ? viewBgHeight - innerHeight : innerHeight - viewBgHeight),
    [innerWidth, innerHeight],
  )

  const left = useMemo<number>(() => innerWidth * xPerWidthRatio, [innerWidth])
  const top = useMemo<number>(() => {
    if (isFitIntoWindow) {
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
    isFitIntoWindow,
  }
}
