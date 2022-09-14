import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'

const PageWrapper = styled.div`
  padding: 100px 4vw 100px 4vw;
  background: linear-gradient(0deg, #f8f8f8, #f8f8f8), #ffffff;
  text-align: center;

  @media (min-width: 2048px) {
    padding: 100px 10vw 15vh 10vw;
  }
`

export const PrivacyPolicyPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageWrapper></PageWrapper>
    </>
  )
}

export default PrivacyPolicyPage
