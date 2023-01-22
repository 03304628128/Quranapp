
import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

function Dropdown(props) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.DropdownSelect} onPress=
        {() => setIsClicked(!isClicked)}>
        <Text>{props.selectedData.transliteration}</Text>
        { (
          <Image source={require('../Images/dropdown.png')} style={styles.icon} />
        )}
      </TouchableOpacity>

      {isClicked ? (
        <View style={styles.dropdownArea}> 
        <FlatList data={props.data}renderItem={({item,index})=>{
          return(
            <TouchableHighlight style={styles.countryItem}
            activeOpacity={0.6}
            underlayColor="rgb(198, 203, 207)"
            onPress={()=>{
              props.setSel(item.id)
              setIsClicked(!isClicked)
              }}
            >
              <Text>{item.transliteration}</Text>
            </TouchableHighlight>
          )
        }}

        keyExtractor={item=>item.id}
        />       
          
    
        </View>
        ):null
        }
      
          </View>

  )
}

export default Dropdown;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:5
  },
  DropdownSelect: {
    width: '100%',
    height: 50,
    // borderRadius:10,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  icon: {
    width: 20,
    height: 20,
  },
  dropdownArea: {
    width: '100%',
   
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderWidth: 0.5,
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