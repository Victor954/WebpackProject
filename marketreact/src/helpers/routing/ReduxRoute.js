import { Redirect, Route } from "react-router-dom";
import { combineReducers } from 'redux';
import { useSelector } from 'react-redux'

export function LoaderRoute ({pageContract , reduxData , ...rest}) {

    const Component = initPage(pageContract ,reduxData );
    
    return (<Route {...rest}>
      <Component />
    </Route>)
}


export function PrivateRoute({ pageContract, reduxData , ...rest }) {

    const auth = useSelector((state) => state.mainData.authServiceModel.authUserData.data.token);

    const Component = (auth) ? initPage(pageContract ,reduxData ) : null;

    return <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
}

function initPage(pageContract , reduxData) {
  
  const Component = pageContract.PageComponent;
  const { store ,  reducresObject , sagaMiddleware } = reduxData;

  const pageReducer = pageContract.getReducer();

  sagaMiddleware.run(pageContract.getSaga());

  if(pageReducer){
    reducresObject.pageData = pageReducer;
  }

  store.replaceReducer(combineReducers(reducresObject));

  return Component;
}