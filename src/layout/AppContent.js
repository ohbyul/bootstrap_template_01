import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import routes from '../routes'

const AppContent = (props) => {
  return (
    <Switch>
      {
        routes.menu.map((route, idx) => {
        return (
          route.component && (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={(prop) => {
                  return   <route.component {...prop}/>
              }}
            />
          )
        )
      })}
      <Redirect from="/" to="/" />
    </Switch>
  )
}

export default React.memo(AppContent)
