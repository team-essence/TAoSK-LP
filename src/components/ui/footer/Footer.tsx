import React, { FCX } from 'react'
import styled from 'styled-components'

type Props = {}

export const Footer: FCX<Props> = ({ className }) => {
  return <FooterContainer className={className}></FooterContainer>
}

const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  background: #00f;
`
