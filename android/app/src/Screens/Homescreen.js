import React, { Component } from 'react'
import { SafeAreaView, TouchableOpacity, View } from 'react-native'

export default class Homescreen extends Component {
  render() {
    return (
        <View>
            <SafeAreaView style={{flex:1}}>
                <TouchableOpacity style={{alignItems:"flex-start",margin:'16'}}
                onPress={()=>this.props.navigation.openDrawer}>
                    <Icon name="bars" size={30} color="#cc5500"/>
                </TouchableOpacity>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text>Home screen</Text>
                </View>
            </SafeAreaView>
        </View>
      
    )
  }
}
