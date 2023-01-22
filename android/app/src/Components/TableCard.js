import React from 'react'
import { StyleSheet, View ,Text, FlatList} from 'react-native'


export default function TableCard(props) {

  const data = [
    {
      title:"name",
      name:"Mustafa",
      id:1
    },
    {
      title:"name",
      name:"Mustafa",
      id:1
    },
    {
      title:"name",
      name:"Mustafa",
      id:1
    },
    {
      title:"name",
      name:"Mustafa",
      id:1
    },
    {
      title:"name",
      name:"Mustafa",
      id:1
    },
  ]
  return (
    <View style={styles.table}>
          <View style={{...styles.row,...{backgroundColor:'gray'}}}>
                   <View style={styles.column}> 
                        <Text style={styles.text}>SURAH INFORMATION</Text>
                  </View>  
          </View>

          <View style={styles.row}>
                      <View style={styles.column}> 
                            <Text>Surah Number</Text>
                      </View>  
                      <View style={styles.column}> 
                            <Text>{props.data.id}</Text>
                     </View>
              </View>
              <View style={styles.row}>
                      <View style={styles.column}> 
                            <Text>Surah Name</Text>
                      </View>  
                      <View style={styles.column}> 
                            <Text>{props.data.name}</Text>
                     </View>
              </View>
              <View style={styles.row}>
                      <View style={styles.column}> 
                            <Text>Translation</Text>
                      </View>  
                      <View style={styles.column}> 
                            <Text>{props.data.transliteration}</Text>
                     </View>
              </View>
              <View style={styles.row}>
                      <View style={styles.column}> 
                            <Text>Revelation Place</Text>
                      </View>  
                      <View style={styles.column}> 
                            <Text>{props.data.type}</Text>
                     </View>
              </View>
              <View style={styles.row}>
                      <View style={styles.column}> 
                            <Text>Total Verses</Text>
                            
                      </View>  
                      <View style={styles.column}> 
                            <Text>{props.data.total_verses}</Text>
                     </View>
              </View>

          {/* <FlatList
            data={data}
            renderItem={({item})=>
            <View style={styles.row}>
                      <View style={styles.column}> 
                            <Text>{item.title}</Text>
                      </View>  
                      <View style={styles.column}> 
                            <Text>{item.name}</Text>
                      </View>  
              </View>
            }
            keyExtractor={item=>item.id}
          /> */}
          
    </View>
  )
  }
  const styles=StyleSheet.create({
  table:{
      padding:5
  },
  row:{
    borderColor:"gray",
    borderWidth:0.4,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  column:{
    width:"50%",
    // backgroundColor:"blue",
  
    marginBottom:2,
    padding:10
  },
  text:{
    textAlign:"center"
  }
  })


