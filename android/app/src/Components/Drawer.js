// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

//  import React, {Component} from 'react';
//  import {
//    SafeAreaView,
//    StyleSheet,
//    ScrollView,
//    View,
//    Text,
//    StatusBar,
//    ImageBackground,
//    Image
//  } from 'react-native';
//  import HomeScreen from '../Screens/Homescreen';
//  import AboutScreen from '../Screens/Aboutscreen';
//  import ContactScreen from '../Screens/Contactscreen';
//  import ServiceScreen from '../Screens/Servicescreen';
 
//  import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//  import { createDrawerNavigator } from '@react-navigation/drawer';
//  import { createAppContainer } from 'react-navigation';

//  import Icon from 'react-native-vector-icons/FontAwesome';
//  import black from '../Images/fav.png';
//  import fav from '../Images/fav.png';
 
//   class Drawer extends Component{
//     render(){
//       return(
//        <App2 />
//       );
//     }
//   }
 
//   const CustomDrawerContentComponent = (props)=>(
//     <View>
//       <SafeAreaView>
//         <View style={{justifyContent:'center', height:200}}>
//          <ImageBackground source={black} style={styles.backgroundContainer}/>
//          <Image source={fav} style={styles.drawerImage} />
//          <Text style={styles.imageText}>
//             ... Stunning innovations
//          </Text>
//         </View>
//         <View>
//          <DrawerItems {...props} />
//         </View>
//       </SafeAreaView>
//     </View>
//   )
 
//   const DrawerNavigator = createDrawerNavigator({
//     Home:{
//       screen:HomeScreen,
//       navigationOptions:{
//         drawerIcon: (
//           <Icon name="home" size={24} color="#cc5500" />
//         ),
//       },
//     },
//     About:{
//      screen:AboutScreen,
//      navigationOptions:{
//        drawerIcon: (
//          <Icon name="info-circle" size={24} color="#cc5500" />
//        ),
//      },
//    },
 
//    Contact:{
//      screen:ContactScreen,
//      navigationOptions:{
//        drawerIcon: (
//          <Icon name="envelope" size={24} color="#cc5500" />
//        ),
//      },
//    },
 
//    Service:{
//      screen:ServiceScreen,
//      navigationOptions:{
//        drawerIcon: (
//          <Icon name="cog" size={24} color="#cc5500" />
//        ),
//      },
//    },
 
//   },{
//     initialRouteName: 'Home',
//     contentComponent: CustomDrawerContentComponent,
//     drawerPosition: 'left',
//     drawerOpenRoute: 'DrawerOpen',
//     drawerCloseRoute: 'DrawerClose',
//     drawerToggleRoute: 'DrawerToggle'
//   })
 
//   const App2 = createAppContainer(DrawerNavigator)
 
//   const styles = StyleSheet.create({
//     container:{
//       flex:1,
//       alignItems:'center',
//       justifyContent: 'center'
//     },
//     backgroundContainer:{
//       flex:1,
//       position: 'absolute',
//       top:0,
//       left:0,
//       right:0,
//       bottom:0,
//       alignItems:'center'
//     },
//     drawerImage:{
//       height:50,
//       width:50,
//       alignSelf:'center'
//     },
//     imageText:{
//       alignSelf:'center',
//       color: '#fff',
//       padding:10,
//       fontWeight: 'bold',
//       fontStyle: 'italic'
//     }
//   });
 
//  export default Drawer;
import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

function Drawer() {
  const [isClicked, setIsClicked] = useState(false);
  const [data,setData]=useState([
    {select: 'Home'},
    {select:'Reading'},
    {select: 'Urdu Translation'},
    {select: 'About'},
    {select: 'Privacy'},
    
    
  ]);
  return (
    <View style={styles.container}>
     
      {/* <Text style={styles.heading}>Dropdown item</Text> */}
      
      <View style={styles.DropdownSelect} >
        <Image source={require('../Images/img1.png')} style={styles.heading} />
        <Text>Online Quran Translation</Text>

        <TouchableOpacity onPress=
        {() => setIsClicked(!isClicked)}>
        {isClicked ? (
          <Image source={require('../Images/khan.png')} style={styles.icon} />
        ) : (
          <Image source={require('../Images/khan.png')} style={styles.icon} />
        )}
        </TouchableOpacity>
      </View>

      {isClicked ? (
        <View style={styles.dropdownArea}> 
        <FlatList data={data}renderItem={({item,index})=>{
          return(
            <TouchableHighlight style={styles.countryItem}
            activeOpacity={0.6}
            underlayColor="#0000FF"
            onPress={()=>{}}
            >
              <Text>{item.select}</Text>
            </TouchableHighlight>
          )
        }}/>       
          
    
        </View>
        ):null
        }
      
          </View>

  )
}

export default Drawer;
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
    width:'80%',
    height:50,
    borderBottomWidth:.2,
    borderBottomColor:'#8e8e8e',
    padding:10,
    }
 
})