import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import GetTips from '../screens/GetTips'
import AddTips from '../screens/AddTips'

export const AppTabNavigator = createBottomTabNavigator({
    GetTips : {
      screen: GetTips,
      navigationOptions :{
        tabBarIcon : <Image source={require("../assets/GetTips.png")} style={{width:20, height:20}}/>,
        tabBarLabel : "GetTips",
      }
    },
    AddTips: {
      screen: AddTips,
      navigationOptions :{
        tabBarIcon : <Image source={require("../assets/AddTips.png")} style={{width:20, height:20}}/>,
        tabBarLabel : "AddTips",
      }
    }
  });