import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useHistory } from 'react-router-dom'

const Wrapper = styled.div`
  width: fit-content;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  color: #7d7d81;
  padding-top: 20px;
  padding-bottom: 7px;
`
const BreadcrumbContainer = styled.span`
  display: flex;
  cursor: pointer;

  &:hover {
    color: #2b2b33;
  }
`
const BreadCrumbText = styled.div`
  line-height: 25px;
`
const ArrowBack = styled(KeyboardBackspaceIcon)`
  display: block;
  float; left;
  height: 20px;
  margin-right: 10px;
`

export const BreadCrumb = () => {
  const history = useHistory()
  const { t } = useTranslation()
  return (
    <>
      <Wrapper>
        <BreadcrumbContainer
          onClick={() => {
            history.goBack()
          }}
        >
          <ArrowBack />
          <BreadCrumbText>{t('common.back')}</BreadCrumbText>
        </BreadcrumbContainer>
      </Wrapper>
    </>
  )
}

export default BreadCrumb
