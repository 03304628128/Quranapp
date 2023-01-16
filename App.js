import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from "./android/app/src/Components/Home";
// import Dropdown from "./android/app/src/Pages/Dropdown";
import Drawer from './android/app/src/Components/Drawer'
import Abc1 from "./android/app/src/Components/Card";
import TableCard from "./android/app/src/Components/TableCard";
// import Dropdown from "./android/app/src/Pages/Dropdown";


const Stack = createNativeStackNavigator();


function App() {
  return (

  //  <Drawer/>  
  // <Abc1/>
  <TableCard/>

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