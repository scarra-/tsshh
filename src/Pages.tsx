import React, { lazy } from 'react'

export const HomePage = lazy(() =>
  import('./pages/HomePage').then((module) => ({
    default: module.HomePage,
  }))
)

export const AboutPage = lazy(() =>
  import('./pages/Static/AboutUsPage').then((module) => ({
    default: module.AboutUsPage,
  }))
)