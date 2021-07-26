import { Redirect, Route , useLocation } from "react-router-dom";
import { combineReducers } from 'redux';
import { useSelector } from 'react-redux'

export function LoaderRoute ({pageContract , reduxData , ...rest}) {

    const Component = pageContract.PageComponent;
    const { store ,  reducresObject , sagaMiddleware } = reduxData;

    const pageReducer = pageContract.getReducer();

    sagaMiddleware.run(pageContract.getSaga());

    if(pageReducer){
      reducresObject.pageData = pageReducer;
    }

    store.replaceReducer(combineReducers(reducresObject));
    
    return (<Route {...rest}>
      <Component />
    </Route>)
}


export function PrivateRoute({ ...rest }) {

    const auth = useSelector((state) => state.mainData.authServiceModel.authUserData.data.token);
    let location = useLocation();
  
    if(location.pathname === "/login" ) {
      return null;
    }
  
    if (!auth) {
  
      return <Redirect
        to={{
          pathname: "/login",
          state: { from: location }
        }}
      />
    } else {
  
      return (
        <LoaderRoute 
        {...rest} />
      );
    }
}