import React, { useEffect } from 'react'
import { TopBar } from './../TopBar'
import { Footer } from './../Footer'

type Props = {
  children: React.ReactNode
}

export const PageLayout = ({ children }: Props) => {
  return (
    <>
      <TopBar />
      {children}
      <Footer />
    </>
  )
}
