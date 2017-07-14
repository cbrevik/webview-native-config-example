import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import MyApp from './MyApp'

export default class overrideNativeConfig extends Component {
  render() {
    return (
      <MyApp />
    );
  }
}

AppRegistry.registerComponent('overrideNativeConfig', () => overrideNativeConfig);