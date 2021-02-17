import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import MyHeader from '../components/MyHeader'


export default class HomeScreen extends Component{
render(){
    return(
        <View>
            <MyHeader title="Cleaning Tips"/>
            <Text>
            Hello! Welcome to the website cleaning tips!
            Now I think seeing the title will obviously show you what this website is for.
            This is for people all over the world to share tips about how they clean.
            Mostly everyone in todays society can understand that lots of people don't know how to get some stain off your table.
            Thats why you can post a tip for people to see here. 
            It will include the product they need and how they should use it and if they need
            any other product to help clean it.</Text>


            <Text>Have Some Problem That You Don't See On Here? Contact cosmothecookie@gmail.com for help and we will personally
            put your question so people who know the answer and post their tip here!
            </Text>
        </View>
    )
}
}