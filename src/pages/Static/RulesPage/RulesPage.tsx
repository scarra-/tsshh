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
const BlockTitle = styled.h2`
  font-size: 30px;
  width: 100%;
  display: block;
  margin-bottom: 60px;
`

export const RulesPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageWrapper>
        <BlockTitle>Terms and conditions</BlockTitle>
      </PageWrapper>
    </>
  )
}

export default RulesPage
