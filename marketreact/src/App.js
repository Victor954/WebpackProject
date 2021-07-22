import React from 'react';
import HomeContract from './pages/home/HomePageContract';


import { createStore, bindActionCreators , combineReducers } from 'redux';
import { connect , Provider } from 'react-redux';

//#region Actions


const SET_USER = "SET_USER";
const CHANGE_USER_NAME = "CHANGE_USER_NAME";
const CHANGE_USER_LAST_NAME = "CHANGE_USER_LAST_NAME";
const CHANGE_USER_AGE = "CHANGE_USER_AGE";
const CHANGE_USER_EMAIL = "CHANGE_USER_NAME";

const CHANGE_POST_TITLE = "CHANGE_POST_TITLE";
const CHANGE_POST_DISCRIPTION = "CHANGE_POST_DISCRIPTION";

//#endregion

//#region ActionsCreactor

function action_change_user_name (value) {

  return {
    type: CHANGE_USER_NAME,
    value: value
  }
}

function action_set_user (value) {

  return {
    type: SET_USER,
    value: value
  }
}

function action_change_post_title (value) {

  return {
    type: CHANGE_POST_TITLE,
    value: value
  }
}
  
//#endregion

//#region Reducers

const userDataReducer = function (state = {}, action) {

    switch (action.type) {
      case SET_USER:
          return action.value;
      case CHANGE_USER_NAME:
          return {...state , name: action.value};
    }

    return state;
}

const postDataReducer = function (state = {}, action) {

    switch (action.type) {
      case CHANGE_POST_TITLE:
        return {...state , title: action.value};
    }

    return state;
}

const rootReducer = combineReducers({

  userData: userDataReducer,
  postData: postDataReducer
})

//#endregion

//#region initialState

const initialState = {

  userData: {
    name: '',
    lastName:'',
    age: 0,
    email: ''
  },
  postData: {
    title: '',
    discription: ''
  }
}

//#endregion

//#region Store

const store = createStore(rootReducer, initialState);

//#endregion

//#region View Part

function mapStateToProps(state) {

  return {
    userData: state.userData,
    postData:  state.postData
  };
}

function mapDispatchToProps(dispatch) { 
  
  return {
    onChangeUserName: bindActionCreators(action_change_user_name, dispatch),
    onSetUserName: bindActionCreators(action_set_user , dispatch),
    onChangePostTitle: bindActionCreators(action_change_post_title, dispatch)
  };
}


function AppView (props) {

  const clickActionChangeUser = (e) => {

    props.onSetUserName({
      name : 'Name',
      lastName: 'Last name',
      age: 12,
      email: 'Email@email.org'
    });
  }

  const clickActionChangePost = (e) => {
    props.onChangePostTitle('Title');
  }

  return (<div>
    <button onClick={clickActionChangeUser}>change user</button>
    <button onClick={clickActionChangePost}>change post</button>

    <h2>User</h2>
    <hr />
    <div>
      <h3>{props.userData.name}</h3>
      <span>{props.userData.lastName}</span> 
      <span>{props.userData.email}</span> 
    </div>

    <h2>Post</h2>
    <hr />
    <div>
      <h3>{props.postData.title}</h3>
      <p>{props.userData.discription}</p> 
    </div>
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
