import { useMemo } from 'react'
import {
  getInnerPcWidthRatio,
  getInnerPcAspectRatio,
  getInnerPcXPerWidthRatio,
  getAspectInnerPcPositionRatio,
  getViewBgAspectRatio,
} from 'utils/getFirstViewSizeRatio'

type UseCalculateInnerPcStyle = Record<'width' | 'height' | 'left' | 'top' | 'tailedHeight', number>

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
