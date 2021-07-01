import { createContext } from 'react';

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
  
  export default new AuthContext().context;