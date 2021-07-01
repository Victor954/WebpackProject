import React from 'react';
import PropTypes from 'prop-types';

import {
  Route,
  Redirect,
} from "react-router-dom";

import context from '../context/AuthContext';

export class PrivateRoute extends React.Component {

    static get propTypes() {
      return {
        children: PropTypes.any
      };
    }
  
    constructor(props) {
      super(props);
  
      this.children = props.children;
    }
  
    render() {
  
  
      const getRoutedData = ({ location }) => {
  
        return (<context.Consumer>
          {
            authData => (authData.user) ? this.children : <Redirect to={{
              pathname: "/login",
              state: { from: location }
            }} />
          }
        </context.Consumer>);
      }
  
      return (<Route component={getRoutedData}></Route>);
    }
  }