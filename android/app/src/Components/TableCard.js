// import React, { Component } from "react";
import { View, StyleSheet ,Text} from "react-native";
// import { Table, Row, Rows, Col } from 'react-native-table-component';
// export default class ExampleOne extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         tableHead: ['Head', 'Head4'],
//         tableData: [
//           ['1', '4'],
//           ['a', 'd'],
//           ['1', '456\n789'],
//           ['a', 'd']
//         ]
//       }
//     }
  
//     render() {
//       const state = this.state;
//       return (
//         <View style={styles.container}>
//           <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
//           <Row data={['Information']} style={styles.head} textStyle={styles.text}/>
//             <Row data={state.tableHead} style={styles.head} borderStyle={{borderColor:"#ffff"}} textStyle={styles.text}/>
            
//             <Rows data={state.tableData} textStyle={styles.text}/>
//             <Row>
//                 <Col>'jkk'</Col>
//             </Row>
//           </Table>
//         </View>
//       )
//     }
//   }
  
//   const styles = StyleSheet.create({
//     container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//     head: { height: 40, backgroundColor: '#f1f8ff' },
//     text: { margin: 6 ,textAlign:"center"}
//   });
 
  
function Row({ column }) {  
    return (
      <View style={styles.rowStyle}>
        {column.map((data) => (
          <Cell data={data} />
        ))}
      </View>
   );
  }

  function Cell({ data }) {
    return (
      <View style={styles.cellStyle}>
        <Text>{data}</Text>
      </View>
    );
  }

 export default function Grid() {
    const data = [
      ['gh'],
      [15,  12],
      [11,  8],
      [7, 4],
      [0,  3],
    ];
    return (
      <View style={styles.gridContainer}>
        {data.map((column) => (
          <Row column={column} />
        ))}
      </View>
    );
  }


  const styles = StyleSheet.create({
    gridContainer: {
        // width: 220,
       
    },
    rowStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomColor:"black",
      borderBottomWidth:2
    },
    cellStyle: {
      flex: 1,
      margin: 10,
      textAlign:'center'
    },
  });