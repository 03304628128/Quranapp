import  { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import React, { useRef } from 'react';
import { DrawerLayoutAndroid } from 'react-native';

import HomeScreen from '../Screens/Homescreen';
// import AboutScreen from '../Screens/Aboutscreen';
// import ContactScreen from '../Screens/Contactscreen';
// import ServiceScreen from '../Screens/Servicescreen';
import Reading from '../Screens/Readingscreen';
import UrduTranslation from '../Screens/Urduscreen';
import Pravicyscreen from '../Screens/Pravicyscreen';
import Aboutscreen from '../Screens/Aboutscreen';

const MyDrawer = () => {

  const [pages,setPages] = useState([
   true,false,false,false,false
])

const changePage =(index)=>{
    return setPages(pages.map((e,i)=>{
      closeDrawer()
      if(i==index){
        return true
      }else{
        return false
      }
    }))
}

  const [data,setData]=useState([
        {select: 'Home'},
        {select:'Reading'},
        {select: 'Urdu Translation'},
        {select: 'About'},
        {select: 'Privacy'}])

  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  const navigationView = (
    <View style={{ flex: 1}}>
      <View style={styles.DropdownSelect} >
      
       <Image source={require('../Images/img1.png')} style={styles.heading} />
       <Text>Online Quran Translation</Text>
     </View>
      <FlatList data={data}renderItem={({item,index})=>{
          return(
            <TouchableHighlight style={styles.countryItem}
            activeOpacity={0.6}
            underlayColor="rgb(198, 203, 207)"
            onPress={()=>changePage(index)}
            >

             <View style={{flexDirection:"row"}}>
             <Text style={{marginRight:10}}></Text>
              <Text>{item.select}</Text>
             </View>
            </TouchableHighlight>
          )
        }}/>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      // drawerPosition={DrawerLayoutAndroid.positions}
      renderNavigationView={() => navigationView}
    >
      <View style={styles.container}>
     
     
     <View style={styles.DropdownSelect} >
       <Image source={require('../Images/img1.png')} style={styles.heading} />
       <Text>Online Quran Translation</Text>

       <TouchableOpacity onPress=
       {openDrawer}>
          <Image source={require('../Images/khan.png')} style={styles.icon} />
       </TouchableOpacity>
     </View>
     {
      pages[0]?<HomeScreen/>:null
     }

     {
      pages[1]?<Reading/>:null
     }
     {
      pages[2]?<UrduTranslation/>:null
     }
     {
      pages[3]?<Aboutscreen/>:null
     }
     {
      pages[4]?<Pravicyscreen/>:null
     }

    </View>

    </DrawerLayoutAndroid>
  );
};

export default MyDrawer;


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading: {
    width:50,
    height:50
  
  },
  DropdownSelect: {
    width: '100%',
    height: 50,
    // borderRadius:10,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',

    marginTop:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  icon: {
    width: 60,
    height: 60,
  },
  dropdownArea: {
    width: '100%',
   
    backgroundColor: '#fff',
    alignSelf: 'center',
    // borderWidth: 0.5,
    borderColor: '#8e8e8e',

  },
  countryItem:{
    width:'100%',
    padding:15,
    margin:2,
    // backgroundColor:"#8e8e8e"
    borderBottomWidth:2,
    borderBottomColor:"black"
    }
 
})