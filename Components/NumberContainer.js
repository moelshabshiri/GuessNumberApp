

import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const NumberContainer = props => {
    return(
        <View style={styles.NumberContainer}>
            <Text style={styles.number}> {props.children}</Text>
        </View>
    )
};


const styles= StyleSheet.create({

    NumberContainer:{
      borderWidth:2,
      borderColor:'red',
      padding: 10,
      borderRadius:10,
      marginVertical:10,
      alignItems:'center',
      justifyContent: 'center'
    },
    number:
    {
        color:'red',
        fontSize:22
    }
});

export default NumberContainer;