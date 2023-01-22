import React from 'react'
import { View,Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Aboutscreen() {
  return (
   <ScrollView>
    <View>
     <Text style={{fontSize:20,fontWeight:'bold'}}>About Us</Text>
     <Text style={{padding:3,textAlign:'justify'}}>Quran.com has developed by the students of Brains Institute Peshawar Hayatabad. The website aims to make it
              easy for anyone to read, study, and learn theQuran. The project is open source and
              is built as a collaboration between core team members.</Text>
             <Text style={{fontWeight:'bold',fontSize:20}}>Credit</Text>
             <Text style={{textAlign:'justify',padding:3}}>This project wouldn't have been possible without the many open source libraries and projects we've
            used:</Text>
            <Text style={{fontSize:20,fontWeight:'bold',padding:3}}>Tanzil:<Text style={{fontSize:14,fontWeight:'400',textAlign:'justify'}}>An international Quranic project aimed at providing a highly-verified precise Quran text</Text></Text>
            <Text style={{fontSize:17,fontWeight:'bold',padding:3,textAlign:'justify'}}>QuranComplex:<Text style={{fontSize:14,fontWeight:'400'}}> King Fahd Glorious Qur'an Printing Complex is a leader in serving the Glorious Qur’an and its Sciences, translating its Meanings, and safeguarding the Qur’anic{'\n'}
            Text from distortion, through theoptimaluse of advanced technologies in the field of printing, audio recordings, electronic publishing and digital
            applications
</Text></Text>
<Text style={{fontWeight:'bold',fontSize:20,padding:3}}>Collin Fair:<Text style={{fontSize:14,fontWeight:'400'}}>A tool for producing word-precise segmentation of recorded Qur'anic recitation.</Text></Text>
<Text style={{fontSize:20,fontWeight:'bold',padding:3,textAlign:'justify'}}>QuranEnc:<Text style={{fontSize:14,fontWeight:'400'}}> A portal featuring free and trustworthy translations of the meanings and exegeses of the noble Qur'an in many world languages.</Text></Text>
<Text style={{fontWeight:'bold',fontSize:20,padding:3}}>Zekr:<Text style={{fontSize:14,fontWeight:'400',padding:3}}>An open platform Quran study tool for browsing and researching on the Quran.</Text></Text>
<Text style={{fontSize:20,fontWeight:'bold',padding:3}}>Lokalize: <Text style={{fontSize:14,fontWeight:'400'}}> A computer-aided translation system that focuses on productivity and quality assurance and provides a seamless localization workflow.
</Text></Text>
<Text style={{fontSize:20,fontWeight:'bold',padding:3}}>Vercel:<Text style={{fontSize:14,fontWeight:'400'}}>: is a deployment and collaboration platform for frontend developers which puts the frontend developer first, giving them comprehensive tools to build high-performance websites and applications.
</Text></Text>
<View style={{alignItems:'center',margin:8}}>
<View style={{width:'90%',height:1,backgroundColor:'black'}}>
</View>
</View>
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
    </ScrollView>
  )
}
