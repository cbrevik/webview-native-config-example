import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import CustomWebView from './CustomWebView';

export default class MyApp extends Component {
  render() {
    return (
      <CustomWebView 
        style={styles.container} 
        source={{ uri: 'https://github.com/facebook/react-native' }}
        finalUrl="https://github.com/facebook/react-native/issues"
        onNavigationCompleted={(event) => console.log('Navigation to issues completed')}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});