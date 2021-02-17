/*import React from 'react'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './screens/HomeScreen'
import {AppTabNavigator} from './components/AppTabNavigator'
import {SafeAreaProvider} from 'react-native-safe-area-context'
export default function App(){
  return(
    <SafeAreaProvider>
     <AppContainer/>
    </SafeAreaProvider>
  )
}
const switchNavigator = createSwitchNavigator({
HomeScreen: { screen: HomeScreen },
BottamTab: { screen: AppTabNavigator }
})
const AppContainer = createAppContainer(switchNavigator);*/

import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from './screens/HomeScreen'
import AddTips from "./screens/AddTips";
import GetTips from "./screens/GetTips";
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class App extends React.Component {
  render() {
    return( 
    <SafeAreaProvider>
      <AppContainer/>
    </SafeAreaProvider>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
 HomeScreen: { screen: HomeScreen },
  GetTips: { screen: GetTips },
  AddTips: { screen: AddTips }
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName
      if (routeName=='AddTips'){
        return(
          <Image source={require ("./assets/AddTips.png")}
          style={{width:30,height:30}}/>
        )
      } else if (routeName=='GetTips'){
        return(
          <Image source={require ("./assets/GetTips.jpg")}
          style={{width:30,height:30}}/>
        )
      } else if (routeName=='HomeScreen'){
        return(
          <Image source={require ("./assets/HomeScreen.png")}
          style={{width:30,height:30}}/>
        )
      }
    }
  })
}

);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});