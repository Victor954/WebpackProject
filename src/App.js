import React  from 'react';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import context from './modules/Authorization/context/AuthContext';
import { AuthProvide } from './modules/Authorization/components/AuthProvide';
import PrivateRoute from './modules/Authorization/components/PrivateRoute';
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

  static get propTypes() {

    return {
      data: PropTypes.array
    };
  }

  constructor(props) {
    super (props);

    this._menuData = props.data;
  }

  render() {
    return (<nav>
      <ul>

        {
          this._menuData.map(({label , path}, index) => {
            return (<li key={index}>
              <Link to={path}>{label}</Link>
            </li>);
          })
        }

        <li>
          <User />
        </li>
      </ul>
    </nav>)
  }
}

class PageContract{

  constructor({componentType , menuLabel , path}){

    this._contract = {
      menuLabel: menuLabel,
      accessLevel: 0,
      path: path,
      isExact: false,
      onMenu: true,
      componentType: componentType
    }
  }

  get contract() {
    return this._contract;
  }

  setContract = (callback) => {
    callback(this._contract);

    return this;
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

class AdminPage extends React.Component {

  render() {
    return (<div>Admin page</div>);
  }
}

class NotFoundPage extends React.Component {

  render() {
    return (<div>NotFoundPage page</div>);
  }
}

const arrayIncludesModules = [

  new PageContract({ componentType: HomePage , menuLabel: 'Home' , path: '/' }).setContract((contract) => {contract.isExact = true}) ,
  new PageContract ({componentType: ShopPage , menuLabel: 'Shop' , path: '/shop'}),
  new PageContract ({ componentType: AboutPage , menuLabel: 'About' , path: '/about'}),
  new PageContract ({ componentType: LoginButton , menuLabel: 'login' , path: '/login'}),
  new PageContract ({ componentType: AdminPage , menuLabel: 'Admin' , path: '/admin'}).setContract((contract) => {contract.accessLevel = 2}),
  new PageContract ({ componentType: NotFoundPage, menuLabel: '' , path: '/404'}).setContract((contract) => {contract.onMenu = false})
]

//#endregion

export class App extends React.Component {

  constructor(props){
    super(props);
  }

  getRouteData = () => {

    return arrayIncludesModules.map(({contract}) => {

      return {
        isExact: contract.isExact ,
        accessLevel: contract.accessLevel,
        path: contract.path,
        Component: contract.componentType
      }
    });
  }

  getMenuData = () => {

    return arrayIncludesModules
    .filter(({contract}) => contract.onMenu)
    .map(({contract}) => {

      return {
        label: contract.menuLabel , 
        path: contract.path
      }
    });
  }
  
  render() {

    return (
      <AuthProvide>
        <Router>

          <Menu data={this.getMenuData()}/>

          <Switch>
            {
              this.getRouteData().map(({isExact , accessLevel , path, Component} , index) => {

                const renderFragment = <Component />

                return <PrivateRoute key={index} exact={isExact} roleAccess={accessLevel} path={path}>
                  {renderFragment}
                </PrivateRoute>
              })
            }
            <Redirect to="/404"/>
          </Switch>

        </Router>
      </AuthProvide>
    )
  }
}
