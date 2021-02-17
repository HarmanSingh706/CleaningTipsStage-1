import React,{Component} from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Alert} from 'react-native'
import MyHeader from '../components/MyHeader'
import firebase from 'firebase'
import db from '../config'


export default class AddTips extends Component{
       constructor(){
       super()
       this.state={
           productName:'',
           purposeOfProduct:'',
           contactPhone:''
       }
       }

    addTip=(productName, purposeOfProduct,contactPhone)=>{
        var userName = this.state.userName
        db.collection("tips").add({
          "product_name"    : productName,
          "purposeOfProduct"   : purposeOfProduct,
          "contact" : contactPhone
         }),
         this.setState({
           productName : '',
           purposeOfProduct :'',
           contactPhone: ''
         })
    
         this.setState({
            productName : '',
           purposeOfProduct :'',
           contactPhone: ''
         })
         return Alert.alert(
              'Item ready to exchange',
              '',
              [
                {text: 'OK', onPress: () => {
    
                  this.props.navigation.navigate('HomeScreen')
                }}
              ]
          );
      }

    render(){
        return(
            <View>
                 <MyHeader title="Cleaning Tips"/>
                <TextInput
                placeholder="Product"
                style={styles.productHolder}
                onChangeText ={(text)=>{
                    this.setState({
                        productName:text
                    })
                }}
                />
                <TextInput
                multiline
                placeholder="What To Use It For And How."
                style={styles.descriptionHolder}
                onChangeText ={(text)=>{
                    this.setState({
                        purposeOfProduct:text
                    })
                }}
                />
                <TextInput
                placeholder="Contact(ex. phone number,email)"
                style={styles.productHolder}
                keyboardType='email-address'
                maxLength={28}
                onChangeText ={(text)=>{
                    this.setState({
                        contactPhone:text
                    })
                }}
                />
                <TouchableOpacity
                style={styles.addButton}
                onPress = {()=>{this.addTip(this.state.productName, this.state.purposeOfProduct,this.state.contactPhone),
                    this.setState={
                        productName:'',
                        purposeOfProduct:'',
                        contactPhone:''
                    }
                }}>
                    <Text style={{alignSelf:'center'}}>Add</Text>
                </TouchableOpacity>
                    </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    productHolder:{
        width:300,
        alignSelf:'center',
        borderRadius:15,
        borderWidth:5,
        borderColor:"red"
    },
    descriptionHolder:{
        height: 200,
        width: 300,
        alignSelf:'center',
        borderRadius:15,
        borderWidth:5,
        borderColor:"magenta"
    },
    addButton:{
        width:50,
        height:50,
        flex:1,
        borderColor:"blue",
        borderWidth:3,
        borderRadius:5,
        backgroundColor:'#e300ff',
        alignSelf:'center',
        shadowOpacity:0.1,
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8
         }
    }
})