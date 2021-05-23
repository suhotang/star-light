import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import MainPage from "pages/Main"
import SignInPage from "pages/SignIn"
import SignUpPage from "pages/SignUp"
import RouteContainer from "./RouteContainer"

export default function RoutePages() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/main" />
      </Route>
      <RouteContainer path="/main" exact>
        <MainPage />
      </RouteContainer>
      <RouteContainer path="/signin" exact fullSize>
        <SignInPage />
      </RouteContainer>
      <RouteContainer path="/signup" exact fullSize>
        <SignUpPage />
      </RouteContainer>
    </Switch>
  )
}
