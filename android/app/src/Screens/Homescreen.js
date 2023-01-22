import React, {  useEffect, useState } from 'react'
import { FlatList, View ,Text, ScrollView,Neomorph} from 'react-native'
import {Card} from 'react-native-paper'
import ImageCarousel from '../Components/Carousel';
import TableCard from '../Components/TableCard';
import Dropdown from '../Pages/Dropdown';
import Reading from './Readingscreen';

import axios from 'axios'

// import { Neomorph } from 'react-native-neomorph-shadows';




export default function Card1  () {

  const [select,setSelect] = useState(1)
  const [data,setData] = useState({})
  const [resData,setResData] = useState(null)


    const getData = async()=>{
      try{
          const res = await axios.get('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_en.json')
          console.log(res.data)
          setResData(res.data)
          setData(res.data[0])
      }catch(err){
          console.log(err)
      }
  }

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
      if(resData){
        setData(resData[select-1])
        console.log(data)
      }
    },[select])

    return (
      resData?<ScrollView style={{flex:1,padding:5}}>

      <ImageCarousel/>
      <Dropdown setSel={setSelect}  data={resData} selectedData={data}/>
      <TableCard data={data}/>
      
      <Card style={{margin:5,backgroundColor:'white',borderRadius:10}}>
        <View style={{flex:1,padding:10,margin:5,justifyContent:'center',alignItems:"center"}}>
          
          <Text style={{fontSize:25,textAlign:'center',borderBottomWidth:2}}>{data.transliteration}</Text>
        </View>
      </Card>
      
     <FlatList
      data={data.verses}
      renderItem={({item})=>
      <Card style={{margin:5,backgroundColor:'white',borderRadius:10}}>
        <View style={{flex:1,padding:5,flexDirection:'row'}}>
          
          <Text style={{flex:1,fontSize:15}}>{item.text}</Text>
        </View>
        <View style={{flex:1,padding:5,flexDirection:'row'}}>
          
          <Text style={{flex:1,fontSize:15}}>{item.translation}</Text>
        </View>
       
      </Card>
      }
      keyExtractor={item=>item.id}
     />
     <View style={{height:20}}></View>
      </ScrollView>:null
    )
  
}