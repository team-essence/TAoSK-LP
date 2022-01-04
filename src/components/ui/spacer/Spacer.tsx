import React, { FCX } from 'react'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'

type Props = {
  size: number
  horizontal?: boolean
}

export const Spacer: FCX<Props> = ({ className, size, horizontal }) => {
  return (
    <div
      style={
        horizontal
          ? {
              width: calculateMinSizeBasedOnFigma(size),
              height: 'auto',
              display: 'inline-block',
              flexShrink: 0,
            }
          : { width: 'auto', height: calculateMinSizeBasedOnFigma(size), flexShrink: 0 }
      }
    />
  )
}
