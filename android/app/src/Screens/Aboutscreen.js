import React from 'react'
import { View,Text } from 'react-native'

export default function Aboutscreen() {
  return (
   <View>
    <View>
     <Text style={{fontSize:20,fontWeight:'bold'}}>About Us</Text>
     <Text style={{padding:3,textAlign:'justify'}}>Quran.com has developed by the students of Brains Institute Peshawar Hayatabad. The website aims to make it
              easy for anyone to read, study, and learn theQuran. The project is open source and
              is built as a collaboration between core team members.</Text>
             <Text style={{fontWeight:'bold',fontSize:20}}>Credit</Text>
             <Text>This project wouldn't have been possible without the many open source libraries and projects we've
            used:</Text>
            <Text style={{fontSize:20}}>Tanzil: <Text style={{fontSize:14}}>An international Quranic project aimed at providing a highly-verified precise Quran text</Text></Text>
    </View>
   </View>
  )
}
