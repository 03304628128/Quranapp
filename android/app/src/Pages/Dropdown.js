
// import React, { useState } from 'react'
// import { Text, View, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
// import { FlatList } from 'react-native-gesture-handler';

// function Dropdown() {
//   const [isClicked, setIsClicked] = useState(false);
//   const [data,setData]=useState([
//     {country: 'Afghanistan', code: '93', iso: 'AF'},
//     {country: 'Albania', code: '355', iso: 'AL'},
//     {country: 'Algeria', code: '213', iso: 'DZ'},
//     {country: 'American Samoa', code: '1-684', iso: 'AS'},
//     {country: 'Andorra', code: '376', iso: 'AD'},
//     {country: 'Angola', code: '244', iso: 'AO'},
//     {country: 'Anguilla', code: '1-264', iso: 'AI'},
//     {country: 'Antarctica', code: '672', iso: 'AQ'},
//     {country: 'Antigua and Barbuda', code: '1-268', iso: 'AG'},
//     {country: 'Argentina', code: '54', iso: 'AR'},
//     {country: 'Armenia', code: '374', iso: 'AM'},
//     {country: 'Aruba', code: '297', iso: 'AW'},
//     {country: 'Australia', code: '61', iso: 'AU'},
//     {country: 'Austria', code: '43', iso: 'AT'},
//     {country: 'Azerbaijan', code: '994', iso: 'AZ'},
//     {country: 'Bahamas', code: '1-242', iso: 'BS'},
//     {country: 'Bahrain', code: '973', iso: 'BH'},
//     {country: 'Bangladesh', code: '880', iso: 'BD'},
//     {country: 'Barbados', code: '1-246', iso: 'BB'},
//     {country: 'Belarus', code: '375', iso: 'BY'},
//     {country: 'Belgium', code: '32', iso: 'BE'},
//     {country: 'Belize', code: '501', iso: 'BZ'},
//     {country: 'Benin', code: '229', iso: 'BJ'},
//     {country: 'Bermuda', code: '1-441', iso: 'BM'},
//     {country: 'Bhutan', code: '975', iso: 'BT'},
//     {country: 'Bolivia', code: '591', iso: 'BO'},
//     {country: 'Bosnia and Herzegovina', code: '387', iso: 'BA'},
//     {country: 'Botswana', code: '267', iso: 'BW'},
//   ]);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Dropdown item</Text>
//       <TouchableOpacity style={styles.DropdownSelect} onPress=
//         {() => setIsClicked(!isClicked)}>
//         <Text>select Item</Text>
//         {isClicked ? (
//           <Image source={require('../Images/upload.png')} style={styles.icon} />
//         ) : (
//           <Image source={require('../Images/dropdown.png')} style={styles.icon} />
//         )}
//       </TouchableOpacity>

//       {isClicked ? (
//         <View style={styles.dropdownArea}> 
//         <FlatList data={data}renderItem={({item,index})=>{
//           return(
//             <TouchableHighlight style={styles.countryItem}
//             activeOpacity={0.6}
//             underlayColor="#0000FF"
//             onPress={()=>{}}
//             >
//               <Text>{item.country}</Text>
//             </TouchableHighlight>
//           )
//         }}/>       
          
    
//         </View>
//         ):null
//         }
      
//           </View>

//   )
// }

// export default Dropdown;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: '800',
//     alignSelf: 'center'
//   },
//   DropdownSelect: {
//     width: '90%',
//     height: 50,
//     // borderRadius:10,
//     borderWidth: 0.5,
//     borderColor: '#8e8e8e',
//     alignSelf: 'center',

//     marginTop: 50,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingLeft: 15,
//     paddingRight: 15,
//   },
//   icon: {
//     width: 20,
//     height: 20,
//   },
//   dropdownArea: {
//     width: '90%',
   
//     backgroundColor: '#fff',
//     alignSelf: 'center',
//     borderWidth: 0.5,
//     borderColor: '#8e8e8e',

//   },
//   countryItem:{
//     width:'80%',
//     height:50,
//     borderBottomWidth:.2,
//     borderBottomColor:'#8e8e8e',
//     padding:10,
//     }
 
// })