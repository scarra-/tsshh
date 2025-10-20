import React from 'react'
import styled from 'styled-components/macro'
import { useHistory, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Language } from '../../core/Language'

const Wrapper = styled.header`
  position: relative;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  z-index: 200;
  background-color: rgb(36, 38, 40);
  border-bottom: 1px solid rgb(95, 95, 96);
`
const Items = styled.div`
  display: flex;
  align-items: center;
`
const Item = styled(Link)`
  margin-right: 24px;
  color: white;
  font-size: 15px;
  font-weight: normal;
  &:hover {
    text-decoration: underline;
    // color: #2b2b33;
  }
`
const StyledLogo = styled.div`
  margin-right: 53px;
  display: block;

  a {
    color: white;

    svg {
      margin-right: 10px;
    }
  }
`
const Logo = styled.span`
  font-size: 26px;
  font-weight: 700;
  margin-right: 10px;
  color: white;
`
const Emoji = styled.span`
  font-size: 24px;
  margin-right: 10px;
  vertical-align: revert;
`

export const TopBar = () => {
  const { t } = useTranslation()

  const navigationItems = [
    {
      name: t('navigation.mixer'),
      linkUrl: '/',
    },
    {
      name: t('navigation.about'),
      linkUrl: '/about',
    },
  ]

  return (
    <Wrapper>
      <Items>
        <StyledLogo>
          <Link to="/" aria-label="home">
            <Emoji></Emoji>
            <Logo>breezle</Logo>
          </Link> 
        </StyledLogo>
        {navigationItems.map((item) => (
          <Item to={item.linkUrl} key={item.name} aria-label={item.name}>
            {item.name}
          </Item>
        ))}
        <Language />
      </Items>
    </Wrapper>
  )
}
