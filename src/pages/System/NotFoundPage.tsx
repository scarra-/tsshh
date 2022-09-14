import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { useHistory, Link } from 'react-router-dom'

const PageWrapper = styled.div`
  padding: 100px 4vw 100px 4vw;
  background: linear-gradient(0deg, #f8f8f8, #f8f8f8), #ffffff;
  text-align: center;
  min-height: 50vh;

  @media (min-width: 2048px) {
    padding: 100px 10vw 15vh 10vw;
  }
`
const ContentWrapper = styled.div`
  width: 450px;
  display: inline-block;
`
const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 12rem;
  text-align: center;
  letter-spacing: 0.2px;
  color: #2b2d2f;
  margin-bottom: 51px;
`
const Description = styled.div`
  width: 100%;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #828282;
  margin-bottom: 20px;
`
const HomeLink = styled(Link)`
  font-weight: bold;
  color: #ee4b41;
  text-decoration: underline;
`

export const NotFoundPage = () => {
  const { t } = useTranslation()
  const history = useHistory()

  return (
    <>
      <PageWrapper>
        <ContentWrapper>
          <Title>404</Title>
          <Description>{t('404.first_part')}</Description>
          <Description>
            {t('404.lets_go')} <HomeLink to="/">{t('404.home')}</HomeLink>
            {` `}
            {t('404.and_try_from_there')}
          </Description>
        </ContentWrapper>
      </PageWrapper>
    </>
  )
}

export default NotFoundPage
