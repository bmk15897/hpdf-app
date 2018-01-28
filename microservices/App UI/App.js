import React from 'react';
import {StyleSheet ,Text ,View ,AppRegistry } from 'react-native';
import {MenuNavig} from './Screens/Navigators.js';

export default class App extends React.Component {
  render() {
    return (
      <MenuNavig/>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
AppRegistry.registerComponent('App',() => App)