import React, {  useEffect, useState } from 'react'
import { FlatList, View ,Text, ScrollView} from 'react-native'
import {Card} from 'react-native-paper'
import ImageCarousel from '../Components/Carousel';
import TableCard from '../Components/TableCard';
import Dropdown from '../Pages/Dropdown';

import eng_data from './data.json';

export default function Card1  () {

  const [select,setSelect] = useState(1)
  const [data,setData] = useState(eng_data[0])
  const [resData,setResData] = useState(eng_data)

    useEffect(()=>{
      if(resData){
        setData(resData[select-1])
      }
    },[select])

    return (
      resData?<ScrollView style={{flex:1,padding:5}}>

      <ImageCarousel/>
      <Dropdown setSel={setSelect}  data={resData} selectedData={data}/>
      <TableCard data={data}/>
      
      <Card style={{margin:5,backgroundColor:'white',borderRadius:10}}>
        <View style={{flex:1,padding:10,margin:5,alignItems:'center'}}>
          
          <Text style={{flex:1,fontSize:25,textAlign:'center',borderBottomWidth:2}}>{data.transliteration}</Text>
        </View>
      </Card>
      
     <FlatList
      data={data.verses}
      renderItem={({item})=>
      <Card style={{margin:5,backgroundColor:'white',borderRadius:10}}>
        <View style={{flex:1,padding:10,flexDirection:'row',marginLeft:20}}>
          
          <Text style={{flex:1,fontSize:15}}>{item.text}</Text>
        </View>
        {/* <View style={{flex:1,padding:10,flexDirection:'row',marginLeft:20}}>
          
          <Text style={{flex:1,fontSize:15}}>{item.translation}</Text>
        </View> */}
       
      </Card>
      }
      keyExtractor={item=>item.id}
     />
     <View style={{height:20}}></View>
      </ScrollView>:null
    )
  
}