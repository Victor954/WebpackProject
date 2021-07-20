import React from 'react';
import HomeContract from './pages/home/HomePageContract';


import { createStore, bindActionCreators , combineReducers } from 'redux';
import { connect , Provider } from 'react-redux';

//#region Actions

const ACTION_1 = "ACTION_NAME_1";

//#endregion

//#region ActionsCreactor

function action_1 (value) {

  return {
    type: ACTION_1,
    value: value
  }
}
  
//#endregion

//#region Reducers

const reducer = function (state = {}, action) {

    switch (action.type) {
      case ACTION_1:
          state.data = action.value;
          return {...state};
    }

    return state;
}

//#endregion

//#region initialState

const initialState = {
  data: 'test'
}

//#endregion

//#region Store

const store = createStore(reducer, initialState);

//#endregion

//#region View Part

function mapStateToProps(state) {

  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) { 
  
  return {
    onChange1: bindActionCreators(action_1, dispatch)
  };
}


function AppView (props) {

  const clickAction = (e) => {
    props.onChange1('test2');
  }

  return (<div>
    <button onClick={clickAction}>click</button>
    {props.data}
  </div>);
}

const Component = connect(mapStateToProps, mapDispatchToProps)(AppView);

//#endregion

export default function App (props) {

  return (
    <div>
      <Provider store={store}> 
        <Component />
      </Provider>
    </div>
  )
}
