import React from 'react'
import styled from 'styled-components/macro'

import LoadingButton from '@mui/lab/LoadingButton'

export const DefaultButton = styled.button`
  display: inline-block;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 23px;
  background: #ee4b41;
  border-radius: 4px;
  border: 0px;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  text-transform: inherit;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background: #e03c32;
  }

  &:focus {
    background: #d6362c;
  }

  &:disabled {
    background: #f3f3f3 !important;
    color: #2b2b33 !important;

    cursor: inherit;
    border: 1px solid #2b2b33;
  }
`
export const DefaultSmallButton = styled.button`
  display: inline-block;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #1a76d2;
  border-radius: 4px;
  font-size: 13px !important;
  line-height: 13px !important;
  padding: 7px 8px;
  border: 0px;
  font-weight: bold;
  text-transform: inherit;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background: #1465b5;
  }

  &:focus {
    background: #10579d;
  }

  &:disabled {
    background: #f3f3f3 !important;
    color: #2b2b33 !important;

    cursor: inherit;
    border: 1px solid #2b2b33;
  }
`

export const DefaultLoadingButton = styled(LoadingButton)`
  && {
    display: inline-block;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 23px;
    background: #ee4b41;
    border-radius: 4px;
    border: 0px;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    text-transform: inherit;
    color: #ffffff;
    cursor: pointer;

    &.Mui-disabled {
      background: #f3f3f3;
      color: #2b2b33;

      cursor: inherit;
      border: 1px solid #2b2b33;
    }

    .MuiLoadingButton-loadingIndicator {
      color: #ffffff;
    }

    &:hover {
      background: #e03c32;
    }

    &:focus {
      background: #d6362c;
    }

    &.MuiLoadingButton-loading {
      color: #ee4b41 !important;
      background: #ee4b41 !important;
      border: 0px !important;
    }
  }
`

export const BlankLoadingButton = styled(LoadingButton)`
  && {
    display: inline-block;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 23px;
    border-radius: 4px;
    border: 0px;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    text-transform: inherit;
    cursor: pointer;

    &: [loading] {
      color: white !important;
    }
  }
`

export default DefaultButton
