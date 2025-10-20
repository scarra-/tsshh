import React, { useEffect } from 'react'
import styled from 'styled-components/macro'

import { HeaderSection } from './HeaderSection'

const Wrapper = styled.div`
  background-color: rgb(36, 38, 40);
`

export const HomePage = () => {
  return (
    <Wrapper>
      <HeaderSection />
    </Wrapper>
  )
}
