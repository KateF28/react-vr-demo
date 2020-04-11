import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import App from "./src/App";

export default class react_vr_demo extends React.Component {
  render() {
    return (
      <View>
          <App />
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr_demo', () => react_vr_demo);
