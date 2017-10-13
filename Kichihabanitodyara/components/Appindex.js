import React from 'react'
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,

} from  'react-native';
import secondscreen from './secondscreen';
import thirdscreen from './thirdscreen';
import { Router, Scene } from 'react-native-router-flux';

export default class  Appindex extends  React.Component{
      render(){

          return(
                  <Router>
                    <Scene key = "root">
                      <Scene key = "secondscreen"
                       component ={secondscreen}
                       hideNavBar={true}
                       title="secondscreen"
                       initial
                       />
                       <Scene key = "thirdscreen"
                       component = {thirdscreen}
                       title = "thirdscreen"
                       />
                       </Scene>
                  </Router>
          );
      }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
AppRegistry.registerComponent('Appindex',() =>Appindex );
