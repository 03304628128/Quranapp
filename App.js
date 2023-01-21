import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from "./android/app/src/Components/Home";
// import Dropdown from "./android/app/src/Pages/Dropdown";
import Drawer from './android/app/src/Components/Drawer'
import TableCard from "./android/app/src/Components/TableCard";
import Carousel from "./android/app/src/Components/Carousel";
import ImageCarousel from "./android/app/src/Components/Carousel";
import Card from "./android/app/src/Components/Card";
import Card1 from "./android/app/src/Screens/Homescreen";

// import Dropdown from "./android/app/src/Pages/Dropdown";


const Stack = createNativeStackNavigator();


function App() {
  return (

   <Drawer/>  
  //  <Abc1/>
  // // <TableCard/>
  // <Carousel/>
  // <ImageCarousel/>


  );
}

const styles =StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'green'
    
    },

})
export default App;


// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, WebView} from 'react-native';
// import {roscon} from "./build/index.html";

// export default  App = ()=> {
//     return (
//       <View style={{height: 300, width: 300,overflow:'hidden' }}>
//           <WebView
//             // source={{uri: roscon}}
//             source={{uri: "http://192.168.0.105:3000"}}
//             scalesPageToFit={true}
//             domStorageEnabled={true}
//             javaScriptEnabled={true}
//             startInLoadingState={true}
//           />
//       </View>
//     );
  
// }

