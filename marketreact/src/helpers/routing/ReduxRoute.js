import React from 'react';
import { Redirect, Route ,useParams , useLocation} from "react-router-dom";
import { combineReducers  } from 'redux';
import { useSelector ,  useDispatch } from 'react-redux'
import { action_redirect_to_page_restore } from '../../services/mainService/store/MainActionsCreator';

export function LoaderRoute ({pageContract , reduxData , ...rest}) {

    const Component = initPage(pageContract ,reduxData );
    
    return (<Route {...rest}>
      <Component />
    </Route>)
}

export function Redirector(props) {

  const location = useLocation();
  const routingModel = useSelector(state => state.mainData.mainServiceModel.redirectData);

  const dispatch = useDispatch();

  React.useEffect(() => {

    if(location.pathname === routingModel.url && routingModel.send) {
      dispatch(action_redirect_to_page_restore());
    }
  });

  if(routingModel.send) {

    return (<Redirect
      to={routingModel.url}
    />);
  }

  return null;
}

function RouteEqualsEmail ({ Component , path  }) {

  const { email } = useParams();
  const user = useSelector((state) => state.mainData.userServiceModel.userData.data);
  const location = useLocation();

  if(email !== user.email) {

    return <Redirect
        to={{
          pathname: `${path}/${user.email}`,
          state: { from: location }
        }}
      />
  }

  return <Component />
}

export function PriveteUserRoute({pageContract, reduxData , path , ...rest}) {

  const user = useSelector((state) => state.mainData.userServiceModel.userData.data);
  const Component = (user.token) ? initPage(pageContract ,reduxData ) : null;

  return (

    <React.Fragment>

      <PrivateRoute { ...{ path: `${path}/:email` , ...rest } }>
        <RouteEqualsEmail Component={Component} path={path}/>
      </PrivateRoute>
      
      <Route exact path={[ `${path}/` , `${path}/` ]}>
        <Redirect to={`${path}/$email`}/>
      </Route>
    </React.Fragment>
  )
} 

export function PrivatePageRoute({ pageContract, reduxData , ...rest }) {

    const auth = useSelector((state) => state.mainData.userServiceModel.userData.data.token);
    const Component = (auth) ? initPage(pageContract ,reduxData ) : null;

    return <PrivateRoute {...rest}>
        <Component />
    </PrivateRoute>
}

function PrivateRoute ({ children , ...rest}) {
  const auth = useSelector((state) => state.mainData.userServiceModel.userData.data.token);

  return <Route path={rest.path}
      render={({ location }) =>
        auth ? (
          children
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