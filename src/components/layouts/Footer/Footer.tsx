import React from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Facebook, Instagram, LinkedIn } from '../../core/Icons'
import { Language } from '../../core/Language'

const Wrapper = styled.footer`
  position: relative;
  background: transparent;
  padding: 0 4vw 20px 4vw;
  z-index: 500;
`
const TopBlockWrapper = styled.div`
  height: 205px;
  display: flex;
`
const BottomBlockWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
  color: white;

  @media (min-width: 2048px) {
    padding-bottom: 20px;
  }
`
const RightsBlock = styled.div`
  width: 50%;
  text-align: left;
`
const CaptchaBlock = styled.div`
  width: 50%;
  text-align: right;
`
const StyledLogo = styled.div`
  margin-right: 53px;
  display: block;
  margin-bottom: 15px;
`
const MediaBlock = styled.div`
  padding-left: 0;
  padding-top: 2vw;
  width: 15%;
`
const SocialMediaBlocks = styled.div`
  display: flex;
`
const ListBlock = styled.div`
  padding-top: 2vw;
  display: flex;
  width: 70%;
  align-items: baseline;
  justify-content: center;

  ul {
    list-style-type: none;
    margin-right: 5vw;
    padding-left: 0;
    margin-top: 0;
  }

  li {
    margin-bottom: 10px;
    a {
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 140%;
      color: white;

      &:hover {
        // color: #2b2b33;
        text-decoration: underline;
      }
    }
  }
`
const ListHeader = styled.li`
  font-style: normal;
  font-weight: bold !important;
  font-size: 15px;
  line-height: 140%;
  margin-bottom: 20px !important;
  color: white !important;
`
const SocialMediaBlock = styled.div`
  margin-right: 10px;
  height: 28px;
  width: 28px;
  color: white;

  &:hover {
    svg {
      color: #2b2b33;
    }
  }

  svg {
    height: 28px;
    width: 28px;
  }
`
const MediaText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: white;
  margin-top: 15px;
`
const StyledLanguageContainer = styled.div`
  margin-top: 30px;
  line-height: 21px;
  width: 15%;
`
const StyledDivider = styled.hr`
  width: 100%;
  border-width: 0px 1px thin;
  border-style: solid;
  border-color: #d7d7d7;

  @media (min-width: 2048px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`
const Logo = styled.span`
  font-size: 26px;
  font-weight: 700;
  margin-right: 10px;
  color: white;
`

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <TopBlockWrapper>
        <MediaBlock>
          <StyledLogo>
            <Link to="/" aria-label="home">
              <Logo>breezle</Logo>
            </Link>
          </StyledLogo>
          <SocialMediaBlocks>
            <SocialMediaBlock>
              <a aria-label="instagram" href="https://www.instagram.com/adeyanovartur">
                <Instagram></Instagram>
              </a>
            </SocialMediaBlock>
            <SocialMediaBlock>
              <a aria-label="linkedin" href="https://www.linkedin.com/in/arturs-adejanovs-36b404105/">
                <LinkedIn></LinkedIn>
              </a>
            </SocialMediaBlock>
            <SocialMediaBlock>
              <a aria-label="facebook" href="https://www.facebook.com/artur.adeyanov/">
                <Facebook></Facebook>
              </a>
            </SocialMediaBlock>
          </SocialMediaBlocks>
          <MediaText>
            Mix you perfect ambient background <br/>
            and <i>breezle</i>
          </MediaText>
        </MediaBlock>
        <ListBlock>
          <ul>
            <ListHeader>{t('footer.info')}</ListHeader>
            <li>
              <Link to="/about" aria-label="go-to-about-page">{t('footer.about')}</Link>
            </li>
          </ul>
          <ul>
            <ListHeader>{t('footer.contacts')}</ListHeader>
            <li>
              <a aria-label="phone" href="tel:+37129322660">+371 29322660</a>
            </li>
            <li>
              <a aria-label="email" href="mailto:support@relaxi.com">
                info@breezle.io
              </a>
            </li>
          </ul>
        </ListBlock>
        <StyledLanguageContainer>
          <Language />
        </StyledLanguageContainer>
      </TopBlockWrapper>
      <StyledDivider />
      <BottomBlockWrapper>
        <RightsBlock>
          © breezle {t('footer.all_rights_reserved')}
        </RightsBlock>
        <CaptchaBlock>{t('footer.protected_by_captcha')}</CaptchaBlock>
      </BottomBlockWrapper>
    </Wrapper>
  )
}
