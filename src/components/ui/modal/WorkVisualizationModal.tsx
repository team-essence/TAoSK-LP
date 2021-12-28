import React, { FCX } from 'react'
import { Modal } from 'components/ui/modal/Modal'
import { useInView } from 'react-intersection-observer'
import { calculateMinSizeBasedOnFigma } from 'utils/figma/calculateSizeBasedOnFigma'
import styled, { css } from 'styled-components'

type Props = {}

export const WorkVisualizationModal: FCX<Props> = ({ className }) => {
  const { ref, inView } = useInView({
    rootMargin: '-200px',
    triggerOnce: true,
  })

  return (
    <StyledContainer className={className} ref={ref}>
      {inView && <Modal title="仕事の見える化">aaaaaaaaaaaaaaaaaaaa</Modal>}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: ${calculateMinSizeBasedOnFigma(1120)};
  height: ${calculateMinSizeBasedOnFigma(573)};
  margin: 0 auto;
`
