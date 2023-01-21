import React, { Component } from 'react'
import { FlatList, View ,Text, ScrollView,Neomorph} from 'react-native'
import {Card} from 'react-native-paper'
import ImageCarousel from '../Components/Carousel';

// import { Neomorph } from 'react-native-neomorph-shadows';




export default class Card1 extends Component {
  constructor(props){
    super(props);
      this.state={
        StudentList:[
          {ID:'1',Rollno:'34kljnojohnhnhniuni  uhigbigig5',studentame:'zawanipos ffh '},
          {ID:'2',Rollno:'346',studentame:'zawan',course:'eng'},
          {ID:'3',Rollno:'347',studentame:'zawan',course:'eng'},
          {ID:'4',Rollno:'348',studentame:'zawan',course:'eng'},
          {ID:'5',Rollno:'349',studentame:'zawan',course:'eng'},
          {ID:'6',Rollno:'342',studentame:'zawan',course:'eng'},
          {ID:'1',Rollno:'345',studentame:'zawan',course:'eng'},
          {ID:'2',Rollno:'346',studentame:'zawan',course:'eng'},
        

        ]
      }
    }
  
  render() {
    return (
      <ScrollView style={{flex:1,padding:5}}>

      <ImageCarousel/>

 
     <FlatList
      data={this.state.StudentList}
      renderItem={({item})=>
      <Card style={{margin:5,backgroundColor:'#00aadd',borderRadius:10}}>
        <View style={{flex:1,padding:10,flexDirection:'row',marginLeft:20}}>
          
          <Text style={{flex:1,fontSize:15}}>{item.Rollno}</Text>
        </View>
        <View style={{flex:1,padding:10,flexDirection:'row',marginLeft:20}}>
          
          <Text style={{flex:1,fontSize:15}}>{item.studentame}</Text>
        </View>
       
      </Card>
      }
      keyExtractor={item=>item.ID}
     />
      </ScrollView>
    )
  }
}