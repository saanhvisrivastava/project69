
import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {createBottonTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import ScanScreen from './screens/ScanScreen';


export default class App extends React.Component{
  render(){
    return(
    <AppContainer/>

    )

  }

}

const tabNavigator=createBottonTabNavigator({
  ScanScreen:{screen:ScanScreen},
 
})
 const AppContainer=createAppContainer(tabNavigator);