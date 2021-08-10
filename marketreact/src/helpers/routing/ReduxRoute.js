import { Redirect, Route ,useParams } from "react-router-dom";
import { combineReducers } from 'redux';
import { useSelector } from 'react-redux'

export function LoaderRoute ({pageContract , reduxData , ...rest}) {

    const Component = initPage(pageContract ,reduxData );
    
    return (<Route {...rest}>
      <Component />
    </Route>)
}

export function Redirector({children , ...rest}) {

  const routingModel = useSelector(state => state.mainData.mainServiceModel.redirectData);

  if(routingModel.send) {

    return (<Redirect
      to={routingModel.url}
    />);
  }

  return children;
}

export function PriveteUserRoute({pageContract, reduxData , ...rest}) {

  const { email } = useParams();

  const user = useSelector((state) => state.mainData.userServiceModel.userData.data);
  const Component = (user.token) ? initPage(pageContract ,reduxData ) : null;

  console.log(email);

  return <Route
    {...rest}
    render={({ location }) =>
    user.token ? (
      <Redirect
        to={{
          pathname: `/${rest.path}/${user.email}`,
          state: location
        }}
      />
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

export function PrivateRoute({ pageContract, reduxData , ...rest }) {

    const auth = useSelector((state) => state.mainData.userServiceModel.userData.data.token);

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
    reducresObject[`${pageContract.pageCode}PageData`] = pageReducer;
  }

  store.replaceReducer(combineReducers(reducresObject));

  return Component;
}