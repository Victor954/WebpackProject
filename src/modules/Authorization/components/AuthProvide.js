import React from 'react';
import PropTypes from 'prop-types';
import context from '../context/AuthContext';
import AuthService from '../service/AuthService';

export class AuthProvide extends React.Component {

    static get propTypes() {
      return {
        children: PropTypes.any
      };
    }
  
    constructor(props) {
      super(props)
  
      this.children = props.children;
      this._service  = new AuthService();
      
      this.state = {
        user: null,
        isLoggined: false,
        logIn: this.logIn,
        logOut: this.logOut
      };
    }
    
    componentDidMount () {

        this._service.logIn().then(data => {
            this.setState(data)
        });
    }

    logIn = () => { 
        
      return new Promise((reslove) => {

        this._service.logIn().then(data => {
            this.setState(data)
            reslove();
          });
      });
    }
  
    logOut = () => {
  
      return new Promise((reslove) => {

        this._service.logOut().then(data => {
            this.setState(data)
            reslove();
          });
      });
    }
    
    render() {
  
  
      return (
        <context.Provider value={this.state}>
          {this.children}
        </context.Provider>
      );
    }
  }