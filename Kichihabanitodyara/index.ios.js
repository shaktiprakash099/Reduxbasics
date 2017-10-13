/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Appindex from './components/Appindex';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import AllReducer from './reducers/ReducerIndex';
const storage = createStore(AllReducer);
export default class Kichihabanitodyara extends Component {
  render() {
    return (
    <Provider store = {storage}>
    <Appindex/>
    </Provider>
    );
  }
}

AppRegistry.registerComponent('Kichihabanitodyara', () => Kichihabanitodyara);
