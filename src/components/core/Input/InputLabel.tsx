import React from 'react'
import styled from 'styled-components/macro'
import Label from '@material-ui/core/InputLabel'
import { themeColors } from 'theme'

const SanitizedLabel = ({ isSeparate, ...props }: any) => <Label {...props} />

const StyledInputLabel = styled(SanitizedLabel)<{ isSeparate?: boolean }>`
  && {
    color: ${themeColors.black60};
    top: -1rem;
    z-index: ${({ theme }) => theme.zIndex.minimal};
    padding: 0 ${({ isSeparate }) => (isSeparate ? '0' : '12px')};
    box-sizing: border-box;
    pointer-events: none;
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;

    &.MuiInputLabel-shrink {
      top: 4px;
      transform: scale(1);
    }

    &.Mui-focused {
      color: ${themeColors.blue};
    }

    &.Mui-error {
      color: ${themeColors.black60};
    }
    &.Mui-error.MuiInputLabel-shrink {
      color: ${themeColors.red};
    }
  }
`

type Props = {
  error?: boolean
  htmlFor?: string
  label: React.ReactNode
  required?: boolean
  shrink?: boolean
  isSeparate?: boolean
}

export const InputLabel = ({
  error,
  htmlFor,
  label,
  required,
  shrink,
  isSeparate,
}: Props) => {
  return (
    <StyledInputLabel
      error={error}
      htmlFor={htmlFor}
      shrink={shrink}
      isSeparate={isSeparate}
    >
      {`${label} ${required ? '*' : ''}`}
    </StyledInputLabel>
  )
}
