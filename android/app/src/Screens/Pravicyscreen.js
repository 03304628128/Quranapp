// import React from 'react'
// import { View,Text } from 'react-native'


// export default function Privacy() {
//   return (

//     // Translation section start
//     <View className='container-fluid 'style={{marginTop:'0px'}}>
//     <View className='container bg-white p-5 mb-2 border border-primary'>
//     <h3 class="fw-bold">Privacy policy</h3>
//     This project is run by a set of Muslims who do this work for the sake of Allah. We do not serve you ads, so
//     we do not need to track you or use your personal data to provide you with better ads to increase our
//     revenues. We don’t gather any personally identifiable information. There is no login, there is also no
//     request for location permissions (except optionally on the home page for the purposes of computing more
//     accurate Salah timings).

//     We do use <a href="https://policies.google.com/technologies/partner-sites" target="_blank"
//     className="text-secondary fw-bold">Google Analytics</a> for ensuring that the site continues to work as
//      expected and for knowing whichfeatures to prioritize working on. This information is anonymous and we can’t trace it back to any
//      particular individual.

//      Our code is open source, so the community can easily inspect and ensure that our stance on privacy is being
//      held to its upmost level.
//      <hr/>
//      <View className='container mt-5'>
//           <Text className="fw-bold">OnlineQuranTranslation.com</Text>

//           <Text className="fw-bold">Read, study, and learn The Noble Quran</Text>

//           Quran.com is a Sadaqah Jariyah. We hope to make it

//           easy for everyone to read, study, and learn The Noble

//           Quran. The Noble Quran has many names including Al

//           easy for everyone to read, study, and learn The Noble

//           -Quran Al-Kareem, Al-Ketab, Al-Furqan,Al-Maw'itha,

//           Thikr, and Al-Noor.

//            </View>

//     </View>
//     </View>


//   )
// }

import { Link } from '@react-navigation/native'
import React from 'react'
import { View,Text } from 'react-native'
import { Linking } from 'react-native';

export default function Pravicyscreen() {
    return (
        <View>
            <View style={{alignItems:"center"}}>
            <View style={{width:"100%"}}>
                <Text style={{fontWeight:"bold",fontSize:20}}>Pravicy policy</Text>
            </View>

                <Text style={{padding:3,textAlign:'justify'}}>   
                This project is run by a set of Muslims who do this work for the sake of Allah. We do not serve you ads, so
                we do not need to track you or use your personal data to provide you with better ads to increase our
                revenues. We don’t gather any personally identifiable information. There is no login, there is also no
                request for location permissions (except optionally on the home page for the purposes of computing more
                accurate Salah timings).{"\n"}
                we do use 
               <Text style={{color: 'blue'}}
                        onPress={() => Linking.openURL('https://policies.google.com/technologies/partner-sites')}>
                   https://policies.google.com/technologies/partner-sites </Text>for ensuring that the site continues to work as
              expected and for knowing whichfeatures to prioritize working on. This information is anonymous and we can’t trace it back to any
              particular individual.

             
             Our code is open source, so the community can easily inspect and ensure that our stance on privacy is being
             held to its upmost level. 
                </Text>
                <View style={{backgroundColor:"black",height:1,width:"90%"}}></View>
                <View>
                    <Text style={{fontWeight:'bold',fontSize:20,margin:3}}>OnlineQuranTranslation.com</Text>

                    <Text style={{fontWeight:'bold',padding:3,textAlign:'justify'}}>Read, study, and learn The Noble Quran.</Text>
                    <Text style={{padding:3,textAlign:'justify'}}>Quran.com is a Sadaqah Jariyah. We hope to make it
                          easy for everyone to read, study, and learn The Noble
                          Quran. The Noble Quran has many names including Al
                          easy for everyone to read, study, and learn The Noble
                          -Quran Al-Kareem, Al-Ketab, Al-Furqan,Al-Maw'itha,
                          Thikr, and Al-Noor.
                    </Text>
                </View>
            </View>
        </View>
    )
}

