// import React from 'react';

// // import all the components we are going to use
// import { SafeAreaView, Text, View, StyleSheet, Image,FlatList} from 'react-native';

// //import Card
// import { Card } from 'react-native-paper';

// const Abc1 = () => {
//     return (
        
//         <SafeAreaView>
//         <View >
//          <Card style={styles.card}>
//          <Text style={styles.paragraph} >  Al-Fatihah </Text>
//                 </Card>
     
//          <Card style={styles.card}>
//          <Card style={styles.card}>
//         <Text>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
//         </Text>
//         <Text>In the name of Allah, the Entirely Merciful, the Especially Merciful</Text>
//         </Card>
//         <Card style={styles.card}>
//         <Text>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
//         </Text>
//         <Text>In the name of Allah, the Entirely Merciful, the Especially Merciful</Text>
//         </Card>
//         <Card style={styles.card}>
//         <Text>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
//         </Text>
//         <Text>In the name of Allah, the Entirely Merciful, the Especially Merciful</Text>
//         </Card>
//         <Card style={styles.card}>
//         <Text>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
//         </Text>
//         <Text>In the name of Allah, the Entirely Merciful, the Especially Merciful</Text>
//         </Card>
//         <Card style={styles.card}>
//         <Text>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
//         </Text>
//         <Text>In the name of Allah, the Entirely Merciful, the Especially Merciful</Text>
//         </Card
        
//         </Card>
    
    
//         </View>
//         </SafeAreaView>
       
    
//     );
// };

// export default Abc1;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 20,

//     },
//     paragraph: {
//         fontSize: 15,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         padding: 10,
//         backgroundColor: "rgb(201 187 201)"
//     },
//     card: {
//         // borderWidth: 5,
//         backgroundColor: "white",
//         padding: 10,
//         marginBottom: 10

//     }
// });
import React, { Component } from 'react'
import { FlatList, View ,Text} from 'react-native'
import {Card} from 'react-native-paper'

export default class Card1 extends Component {
  constructor(props){
    super(props);
      this.state={
        StudentList:[
          {ID:'1',Rollno:'34kljnojohnhnhniuni  uhigbigig5',studentame:'zawanipos ffh '},
          {ID:'2',Rollno:'346',studentame:'zawan',course:'eng'},
          {ID:'3',Rollno:'347',studentame:'zawan',course:'eng'},
          {ID:'4',Rollno:'348',studentame:'zawan',course:'eng'},
          {ID:'5',Rollno:'349',studentame:'zawan',course:'eng'},
          {ID:'6',Rollno:'342',studentame:'zawan',course:'eng'},
          {ID:'1',Rollno:'345',studentame:'zawan',course:'eng'},
          {ID:'2',Rollno:'346',studentame:'zawan',course:'eng'},
        

        ]
      }
    }
  
  render() {
    return (
      <View style={{flex:1,padding:5}}>
     <FlatList
      data={this.state.StudentList}
      renderItem={({item})=>
      <Card style={{margin:5,backgroundColor:'#00aadd',borderRadius:10}}>
        <View style={{flex:1,padding:10,flexDirection:'row',marginLeft:20}}>
          
          <Text style={{flex:1,fontSize:15}}>{item.Rollno}</Text>
        </View>
        <View style={{flex:1,padding:10,flexDirection:'row',marginLeft:20}}>
          
          <Text style={{flex:1,fontSize:15}}>{item.studentame}</Text>
        </View>
       
      </Card>
      }
      keyExtractor={item=>item.ID}
     />
      </View>
    )
  }
}

