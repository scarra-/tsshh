import React from 'react'
import styled from 'styled-components/macro'
import Alert from '@mui/material/Alert'

const MuiAlert = styled(Alert)`
  background: #fff4e7;
  border-radius: 4px;
  padding: 13px 14px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 15px !important;
  line-height: 23px !important;
  color: #2b2b33;
  margin: 20px 0px;
`

export const StyledAlert = ({
  children,
  severity,
}: {
  children: any
  severity: string
}) => {
  // @ts-ignore
  return <MuiAlert severity={severity}>{children}</MuiAlert>
}

export default StyledAlert
