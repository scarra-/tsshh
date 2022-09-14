import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components/macro'
import FormHelperText from '@material-ui/core/FormHelperText'
import MaterialInput from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import { themeColors } from 'theme'
import { InputLabel } from './InputLabel'

const SanitizedFormControl = (props: any) => <FormControl {...props} />

const StyledFormControl = styled(SanitizedFormControl)`
  margin-bottom: 2px;
  position: relative;
  width: 100%;
`

const baseStyles = css`
  && {
    margin-top: 0;
    padding-right: 12px;
    width: 100%;
    border-radius: 4px;

    .MuiInputBase-input {
      padding: 22px 0 5px 12px;
    }

    &.Mui-error {
      border-color: ${themeColors.red};
    }

    &.MuiInput-underline:before,
    &.MuiInput-underline:after,
    &.MuiInput-underline:hover:not(.Mui-disabled):before,
    &.MuiInput-underline.Mui-error:after,
    &.Mui-disabled:before {
      border-bottom: 0;
    }
  }
`

const StyledDarkInput = styled(MaterialInput)`
  && {
    ${baseStyles}
    background: ${themeColors.greyExtraLight};
    border: 1px solid ${themeColors.greyExtraLight};

    &:hover,
    &.Mui-focused {
      background: linear-gradient(
          0deg,
          ${themeColors.black08},
          ${themeColors.black08}
        ),
        ${themeColors.greyExtraLight};
      box-shadow: 0px 4px 12px ${themeColors.black08};
    }

    &.Mui-disabled {
      color: ${(props) =>
        props.readOnly ? themeColors.black : themeColors.black60};
      pointer-events: none;
    }
  }
`

const StyledLightInput = styled(MaterialInput)`
  && {
    ${baseStyles}
    background: ${themeColors.white};
    border: 1px solid ${themeColors.white};

    &:hover,
    &.Mui-focused {
      background: ${themeColors.white};
      border-color: ${themeColors.greyLight};
      box-shadow: 0px 4px 12px ${themeColors.black08};
    }

    &.Mui-disabled {
      color: ${(props) =>
        props.readOnly ? themeColors.black : themeColors.black60};
      pointer-events: none;
    }
  }
`

const StyledFormHelperText = styled(FormHelperText)`
  && {
    &.MuiFormHelperText-root {
      letter-spacing: 0.02em;
    }

    &.Mui-focused {
      color: ${themeColors.black40};
    }

    &.Mui-error {
      color: ${themeColors.red};
    }
  }
`

const Limit = styled.span`
  color: ${themeColors.black40};
`

export type InputProps = {
  autoComplete?: string
  dataHook: string
  disabled?: boolean
  endAdornment?: React.ReactNode
  error?: boolean
  helperText?: React.ReactNode
  label?: React.ReactNode
  name: string
  min?: number | string
  maxLength?: number | string
  max?: number | string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  readOnly?: boolean
  required?: boolean
  startAdornment?: React.ReactNode
  showLimit?: boolean
  type?: string
  value?: string
  isLight?: boolean
}

export const Input = forwardRef(
  (
    {
      value,
      name,
      onChange,
      error,
      label,
      type,
      helperText,
      disabled,
      readOnly,
      endAdornment,
      required,
      autoComplete,
      dataHook,
      maxLength,
      showLimit,
      isLight,
      ...props
    }: InputProps,
    ref
  ) => {
    const limit = (
      <Limit>
        {value?.length || '0'}/{maxLength}
      </Limit>
    )
    const inputEndAdornment = showLimit ? limit : endAdornment
    const StyledInput = isLight ? StyledLightInput : StyledDarkInput

    return (
      <StyledFormControl>
        {label && (
          <InputLabel
            label={label}
            required={required}
            error={error}
            htmlFor={dataHook}
          />
        )}
        <StyledInput
          {...props}
          ref={ref}
          inputProps={{
            'data-hook': dataHook,
            'data-hook-error': error ? `${dataHook}-error` : '',
            'maxLength': maxLength,
          }}
          readOnly={readOnly}
          name={name}
          value={value || ''}
          onChange={onChange}
          id={dataHook}
          aria-describedby={dataHook}
          error={error}
          type={type}
          autoComplete={autoComplete}
          disabled={disabled}
          endAdornment={inputEndAdornment}
        />
        <StyledFormHelperText
          error={error}
          id={`${dataHook}-helper`}
          data-hook={`${dataHook}-helper-text`}
        >
          {helperText || ' '}
        </StyledFormHelperText>
      </StyledFormControl>
    )
  }
)
