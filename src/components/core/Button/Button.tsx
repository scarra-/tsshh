import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import NavigateNext from '@material-ui/icons/NavigateNext'
import { themeColors } from 'theme'

const ButtonWrapper = styled.div<{ isFullWidth?: boolean }>`
  position: relative;
  display: inline-flex;
  text-align: center;
  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 100%;
    `}
`

const Center = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
`

type Size = 'small' | 'medium' | 'large'

const defaultSize = 'medium'

const buttonSizes: Record<Size, number> = {
  small: 28,
  medium: 32,
  large: 48,
}

const getButtonSize = (size: Size = defaultSize) => buttonSizes[size]

const verticalSpacing: Record<Size, number> = {
  small: 4,
  medium: 6,
  large: 14,
}

const getVerticalSpacing = (size: Size = defaultSize) =>
  `${verticalSpacing[size]}px`

const horizontalSpacing: Record<Size, number> = {
  small: 12,
  medium: 20,
  large: 32,
}

const getHorizontalSpacing = (size: Size = defaultSize) =>
  `${horizontalSpacing[size]}px`

const buttonColors: Record<Size, any> = {
  small: {
    static: themeColors.bluishGreyLight,
    hover: themeColors.blue,
    staticColor: themeColors.blue,
    hoverColor: themeColors.white,
  },
  medium: {
    static: themeColors.red,
    hover: themeColors.black,
    staticColor: themeColors.white,
    hoverColor: themeColors.white,
  },
  large: {
    static: themeColors.red,
    hover: themeColors.black,
    staticColor: themeColors.white,
    hoverColor: themeColors.white,
  },
}

const getButtonColor = (size: Size = defaultSize) => buttonColors[size]

const renderButtonStyles = (props: {
  disabled?: boolean
  hasArrowRight?: boolean
  isDanger?: boolean
  isLoading?: boolean
  isTransparent?: boolean
  minWidth?: number
  size?: Size
  theme?: any
}) => `
  background-color: ${
    props.disabled ? themeColors.greyLight : getButtonColor(props.size).static
  };
  color: ${
    props.disabled ? themeColors.white : getButtonColor(props.size).staticColor
  };
  box-sizing: border-box;
  min-height: ${getButtonSize(props.size)}px;
  white-space: nowrap;
  overflow: hidden;
  font-weight: ${props.isTransparent || props.size === 'small' ? '400' : '500'};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  text-align: center;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  cursor: ${props.disabled ? 'auto' : 'pointer'};
  pointer-events: ${props.disabled ? 'none' : ''};
  width: 100%;
  ${
    props.hasArrowRight
      ? `padding: ${getVerticalSpacing(props.size)} 0 ${getVerticalSpacing(
          props.size
        )} ${getHorizontalSpacing(props.size)};`
      : `padding: ${getVerticalSpacing(props.size)} ${getHorizontalSpacing(
          props.size
        )};`
  }
  ${props.hasArrowRight && props.isLoading ? 'padding-right: 36px;' : ''}
  ${props.isLoading ? 'pointer-events: none;' : ''}
  ${props.minWidth ? `min-width: ${props.minWidth}px;` : ''}
  > svg {
    width: 1.8rem;
    height: 1.8rem;
    margin-left: 20px;
  }
  &:hover {
    background-color: ${getButtonColor(props.size).hover};
    color: ${getButtonColor(props.size).hoverColor};
  }
  ${
    props.isTransparent
      ? `
    color: ${themeColors.red};
    background-color: #FFF3F2;
  `
      : ''
  }
  ${
    props.isDanger
      ? `
    background-color: ${themeColors.redLight};
    color: ${themeColors.red};
    &:hover {
    background-color: ${themeColors.red};
    color: ${themeColors.white};
  }
  `
      : ''
  }
  ${
    props.isDanger && props.isTransparent
      ? `
    color: ${themeColors.blue};
    background-color: transparent;
    &:hover {
    color: ${themeColors.red};
    background-color: transparent;
  }
  `
      : ''
  }
  ${
    props.disabled && !props.isTransparent
      ? `
  color: ${themeColors.white};
  background-color: ${themeColors.greyLight};
  `
      : ''
  }
`
const getSanitizedProps = ({
  isDanger,
  isDisabled,
  isLoading,
  isTransparent,
  isFullWidth,
  minWidth,
  hasArrowRight,
  href,
  type,
  size,
  ...props
}: any) => props
const SanitizedButton = (props: any) => (
  <button {...getSanitizedProps(props)} type={props.type} />
)

const StyledButton = styled(SanitizedButton)`
  border: none;
  outline: none;
  ${(props) => renderButtonStyles(props)}
`

const SanitizedLink = (props: any) => <Link {...getSanitizedProps(props)} />

const StyledLink = styled(SanitizedLink)``

const StyledHTMLLink = styled.a``

const ButtonContent = styled.div<{ isLoading?: boolean }>`
  ${({ isLoading }) =>
    isLoading &&
    `
      visibility: hidden;
  `}
`

const ArrowRightOne = styled(NavigateNext)`
  transform: translateX(0);
  opacity: 0;
  animation: fadeOutLeft 300ms cubic-bezier(0.42, 0, 0.58, 1);
  @keyframes fadeOutLeft {
    from {
      opacity: 1;
      transform: translateX(8px);
    }
    to {
      transform: translateX(0);
      opacity: 0;
    }
  }

  ${ButtonWrapper}:hover & {
    animation: fadeInRight 300ms cubic-bezier(0.42, 0, 0.58, 1);
    animation-fill-mode: both;
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(0);
      }
      to {
        transform: translateX(8px);
        opacity: 1;
      }
    }
  }
`

const ArrowRightTwo = styled(NavigateNext)`
  transform: translateX(-10px);
  animation: fadeInLeft 300ms cubic-bezier(0.42, 0, 0.58, 1);
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(0);
    }
    to {
      transform: translateX(-10px);
      opacity: 1;
    }
  }

  ${ButtonWrapper}:hover & {
    animation: fadeOutRight 300ms cubic-bezier(0.42, 0, 0.58, 1);
    animation-fill-mode: both;
    @keyframes fadeOutRight {
      from {
        opacity: 1;
        transform: translateX(-10px);
      }
      to {
        transform: translateX(0px);
        opacity: 0;
      }
    }
  }
`

const StyledArrowRightGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    margin: 0;
    width: 1.8rem;
    height: 1.8rem;
  }
`

const ArrowRightGroup = () => (
  <StyledArrowRightGroup>
    <ArrowRightOne />
    <ArrowRightTwo />
  </StyledArrowRightGroup>
)

export type ButtonProps = {
  dataHook?: string
  className?: string
  children: React.ReactNode
  isAutoWidth?: boolean
  isDanger?: boolean
  isFullWidth?: boolean
  isLoading?: boolean
  isDisabled?: boolean
  isTransparent?: boolean
  href?: string
  hasArrowRight?: boolean
  onClick?: (e: React.SyntheticEvent) => void
  opensInNewWindow?: boolean
  icon?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  size?: Size
}

export const Button = ({
  className,
  dataHook,
  children,
  isAutoWidth = true,
  isDanger = false,
  isFullWidth = false,
  isLoading = false,
  isDisabled = false,
  isTransparent = false,
  hasArrowRight = false,
  href,
  onClick,
  opensInNewWindow = false,
  icon,
  type,
  size = defaultSize,
}: ButtonProps) => {
  const buttonContent = icon ? (
    <>
      <ButtonContent isLoading={isLoading}>{children}</ButtonContent>
      {icon}
    </>
  ) : (
    <Center>
      <ButtonContent isLoading={isLoading}>{children}</ButtonContent>
    </Center>
  )

  let minWidth: number | undefined = 176

  if (isAutoWidth || hasArrowRight) {
    minWidth = undefined
  } else if (isTransparent) {
    minWidth = 100
  }

  const buttonType = !onClick && !type ? 'submit' : type

  const linkProps = useCallback(
    () =>
      opensInNewWindow
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
          }
        : {},
    [opensInNewWindow]
  )

  const ButtonContainer = useCallback(
    (props: any) => {
      switch (true) {
        case href && (href.startsWith('http') || href.startsWith('mailto')):
          return <StyledHTMLLink {...props} {...linkProps} href={href} />
        case href && !href.startsWith('http') && !href.startsWith('mailto'):
          return <StyledLink {...props} {...linkProps} to={href} />
        default:
          return <StyledButton {...props} type={buttonType} />
      }
    },
    [href, linkProps, buttonType]
  )

  return (
    <ButtonWrapper className={className} isFullWidth={isFullWidth}>
      <ButtonContainer
        data-hook={dataHook}
        disabled={isDisabled}
        isDanger={isDanger}
        isLoading={isLoading}
        isTransparent={isTransparent}
        minWidth={minWidth}
        hasArrowRight={hasArrowRight}
        onClick={onClick}
        size={size || defaultSize}
      >
        {/* {isLoading && (
          <SpinnerWrapper>
            <CircularProgress />
          </SpinnerWrapper>
        )} */}
        {buttonContent}
        {hasArrowRight && !isLoading && <ArrowRightGroup />}
      </ButtonContainer>
    </ButtonWrapper>
  )
}
