import React,{Component} from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'
import MyHeader from '../components/MyHeader'
import { ListItem } from 'react-native-elements'
import db from '../config'
import firebase from 'firebase';

export default class GetTips extends Component{
    constructor(){
        super()
        this.state={
            productName:'',
            purposeOfProduct:'',
            contactPhone:'',
            tipsList:[]
        }
        this.requestRef= null
        }
        getAddedTipsList =()=>{
         this.requestRef = db.collection("tips")
         .onSnapshot((snapshot)=>{
           var addedTipsList = snapshot.docs.map((doc) => doc.data())
           this.setState({
             addedTipsList : addedTipsList
           });
         })
       }
     
       componentDidMount(){
         this.getAddedTipsList()
       }
     
       componentWillUnmount(){
         this.requestRef();
       }
     
       keyExtractor = (item, index) => index.toString()
     
       renderItem = ( {item, i} ) =>{
         return (
           <ListItem
             key={i}
             title={item.productName}
             subtitle={item.purposeOfProduct}
             titleStyle={{ color: 'black', fontWeight: 'bold' }}
             bottomDivider
           />
         )
       }
    render(){
        return(
            <View style ={{flex:1}}>
                 <MyHeader title="Cleaning Tips"/>
              <View style={{flex:1}}>
          {
            
            this.state.addedTipsList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>Get Your Tips Here</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.addedTipsList}
                renderItem={this.renderItem}
              />
            )
          }
          </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    subContainer:{
        flex:1,
        fontSize: 20,
        justifyContent:'center',
        alignItems:'center'
      }
})