import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
  const config = {
    apiKey: 'AIzaSyAICjtAu1ceIJNHIw8DMjGfDBtO3Wm8YCo',
    authDomain: 'employee-cbcd4.firebaseapp.com',
    databaseURL: 'https://employee-cbcd4.firebaseio.com',
    projectId: 'employee-cbcd4',
    storageBucket: 'employee-cbcd4.appspot.com',
    messagingSenderId: '722635847192'
  };
  firebase.initializeApp(config);
}
  render() {
    const store =createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
    <Router />
      </Provider>
    );
  }
}

export default App;
