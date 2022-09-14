import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { PageLayout } from './components/layouts/PageLayout'

import * as P from './Pages'

export const PAGE_PATH = {
  HOME: '/',
  ABOUT: '/about',
}

const Routes = () => {
  const publicRoutes = [
    {
      key: 'home',
      path: PAGE_PATH.HOME,
      component: P.HomePage,
      exact: true,
    },
    {
      key: 'home',
      path: PAGE_PATH.ABOUT,
      component: P.AboutPage,
      exact: true,
    },
  ]

  const routes = [...publicRoutes]

  const routeComponents = (
    <Route
      exact
      path={[
        '/',
        '/about',
      ]}
    >
      <PageLayout>
        <Switch>
          {routes.map((item) => (
            <Route
              exact
              path={item.path}
              key={item.key}
              component={item.component}
            />
          ))}
        </Switch>
      </PageLayout>
    </Route>
  )

  return (
    <Router>
    <Suspense fallback={null}>
      <Switch>
        {routeComponents}
      </Switch>
    </Suspense>
  </Router>
  )
}

export default Routes
