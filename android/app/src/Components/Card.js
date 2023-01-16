import React from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, Image,FlatList} from 'react-native';

//import Card
import { Card } from 'react-native-paper';

const Abc1 = () => {
    return (
        <SafeAreaView>
        <View >
         <Card style={styles.card}>
         <Text style={styles.paragraph} >  Al-Fatihah </Text>
                </Card>
     
         <Card style={styles.card}>
         <Card style={styles.card}>
        <Text>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
        </Text>
        <Text>In the name of Allah, the Entirely Merciful, the Especially Merciful</Text>
        </Card>
        <Card style={styles.card}>
        <Text>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
        </Text>
        <Text>In the name of Allah, the Entirely Merciful, the Especially Merciful</Text>
        </Card>
        <Card style={styles.card}>
        <Text>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
        </Text>
        <Text>In the name of Allah, the Entirely Merciful, the Especially Merciful</Text>
        </Card>
        <Card style={styles.card}>
        <Text>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
        </Text>
        <Text>In the name of Allah, the Entirely Merciful, the Especially Merciful</Text>
        </Card>
     
      
        
        
        </Card>
    
    
        </View>
        </SafeAreaView>
    );
};

export default Abc1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,

    },
    paragraph: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        backgroundColor: "rgb(201 187 201)"
    },
    card: {
        // borderWidth: 5,
        backgroundColor: "white",
        padding: 10,
        marginBottom: 10


    }
});
