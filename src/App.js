import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory,
  useLocation
} from "react-router-dom";

class User  extends React.Component {

  constructor (props) {
    super(props);

    this._authContext = new AuthContext();
  }

  render() {

    const context =  this._authContext.context;

    return (<div>
      <context.Consumer>
        {
          authObj => (authObj.isLoggined) ? <span>Hello , {authObj.user.name} <LoginOut /></span> : <span>you are not loggined</span>
        }
      </context.Consumer>
    </div>)
  }
}

function LoginOut() {

  const context = new AuthContext().context;

  return (
    <context.Consumer>
      {
        authObj => <button onClick={authObj.logOut}>Out</button>
      }
    </context.Consumer>
  )
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

//#region PagesComponents

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

function LoginPage () {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handlerLoginIn =  (loginCallback) => {
      loginCallback();
      history.replace(from);
    }

    const context = new AuthContext().context;

    return (
      <div>
        You are not loggined

        <context.Consumer>
          {
            authObj => <button onClick={() => handlerLoginIn(authObj.logIn)}>Login</button>
          }
        </context.Consumer>
      </div>
    )
}

//#endregion

class AuthData {

  constructor(){
    this._user = null;
    this._isLoggined = false;
  }

  get user () {
    return this._user;
  }

  get isLoggined () {
    return this._isLoggined;
  }

  logIn = () => {
    
    return {
      user: { name: "User", Email: "Usereact@gmail.com" },
      isLoggined: true
    }
  }

  logOut = () => {

    return {
      user: null,
      isLoggined: false
    }
  }
}

class AuthContext {

  constructor() {

    if (!AuthContext._instance) {

      this._context = createContext();

      AuthContext._instance = this;
    }

    return AuthContext._instance
  }

  get context() {
    return this._context;
  }
}

class AuthProvide extends React.Component {

  static get propTypes() {
    return {
      children: PropTypes.any
    };
  }

  constructor(props) {
    super(props)

    this.children = props.children;
    this._authContextObj = new AuthContext();

    this._data  = new AuthData();

    this.state = {
      user: this._data.user,
      isLoggined: this._data.isLoggined,
      logIn: this.logIn,
      logOut: this.logOut
    };
  }

  logIn = () => { 

    const data =  this._data.logIn();
    this.setState(data)
  }

  logOut = () => {

    const data =  this._data.logOut();
    this.setState(data)
  }

  render() {

    const authContext = this._authContextObj.context;

    return (
      <authContext.Provider value={this.state}>
        {this.children}
      </authContext.Provider>
    );
  }
}

class PrivateRoute extends React.Component {

  static get propTypes() {
    return {
      children: PropTypes.any
    };
  }

  constructor(props) {
    super(props);

    this.children = props.children;
    this._authContextObj = new AuthContext();
  }

  render() {

    const authContext = this._authContextObj.context;

    const getRoutedData = ({ location }) => {

      return (<authContext.Consumer>
        {
          authData => (authData.user) ? this.children : <Redirect to={{
            pathname: "/login",
            state: { from: location }
          }} />
        }
      </authContext.Consumer>);
    }

    return (<Route component={getRoutedData}></Route>);
  }
}

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
              <LoginPage></LoginPage>
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
