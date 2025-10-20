import React from 'react'
import styled from 'styled-components/macro'
import { useTranslation, Trans } from 'react-i18next'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import Button from '@mui/material/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { FlagEN, FlagLV, FlagRU, FlagJA } from '../../core/Icons'

const LanguageBlock = styled.div`
  button {
    color: white;
  }

  svg {
    width: 30px;
    height: 20px;
  }
`
const FlagContainer = styled.div`
  display: inline-flex;
  margin-right: 5px;
`

export const Language = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const { t, i18n } = useTranslation()
  const open = Boolean(anchorEl)
  const languages = [
    // {
    //   title: 'Latviešu',
    //   code: 'lv',
    //   img: <FlagLV />,
    // },
    // {
    //   title: 'Русский',
    //   code: 'ru',
    //   img: <FlagRU />,
    // },
    {
      title: 'English',
      code: 'en',
      img: <FlagEN />,
    },
    // {
    //   title: '日本',
    //   code: 'ja',
    //   img: <FlagJA />,
    // },
  ]

  const renderCurrentLanguage = () => {
    const lang = languages.find(
      (language: any) => language.code === i18n.language
    )

    if (lang) {
      return lang.img
    }

    return <FlagLV />
  }

  return (
    <LanguageBlock>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          setAnchorEl(event.currentTarget)
        }}
      >
        {/* <FlagContainer>{renderCurrentLanguage()}</FlagContainer> */}
        {i18n.language}
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {languages.map((language) => {
          return (
            <MenuItem
              key={language.code}
              id={language.code}
              onClick={() => {
                setAnchorEl(null)
                i18n.changeLanguage(language.code)
              }}
            >
              {/* <FlagContainer>{language.img}</FlagContainer> */}
              {language.title}
            </MenuItem>
          )
        })}
      </Menu>
    </LanguageBlock>
  )
}

export default Language
