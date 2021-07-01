import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import context from './modules/Authorization/context/AuthContext';
import { AuthProvide } from './modules/Authorization/components/AuthProvide';
import { PrivateRoute } from './modules/Authorization/components/PrivateRoute';
import { LoginButton } from './modules/Authorization/components/LoginButtonComponent';

import { LoginOutButton } from './modules/Authorization/components/LoginOutButtonComponent';

//#region PagesComponents

class User  extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {

    return (<div>
      <context.Consumer>
        {
          authObj => (authObj.isLoggined) ? <span>Hello , {authObj.user.name} <LoginOutButton /></span> : <span>you are not loggined</span>
        }
      </context.Consumer>
    </div>)
  }
}

class Menu extends React.Component {
  render() {
    return (<nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <User />
        </li>
      </ul>
    </nav>)
  }
}

class HomePage extends React.Component {

  render() {
    return (<div>Home page</div>);
  }
}

class ShopPage extends React.Component {

  render() {
    return (<div>Shop page</div>);
  }
}

class AboutPage extends React.Component {

  render() {
    return (<div>About page</div>);
  }
}

class NotFoundPage extends React.Component {

  render() {
    return (<div>NotFoundPage page</div>);
  }
}

//#endregion

export class App extends React.Component {
  render() {

    return (
      <AuthProvide>
        <Router>
          <Menu />

          <Switch>
            <PrivateRoute path="/shop">
              <ShopPage></ShopPage>
            </PrivateRoute>
            <Route path="/about">
              <AboutPage></AboutPage>
            </Route>
            <Route path="/login">
              <LoginButton></LoginButton>
            </Route>
            <Route path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
        </Router>
      </AuthProvide>
    )
  }
}
