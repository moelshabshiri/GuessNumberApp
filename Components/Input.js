import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const Input = props => {
    return(
        <TextInput {...props} style={{...styles.input, ...props.style}} />
         
    )

};


const styles= StyleSheet.create({

    input:{
      height:30,
      borderBottomColor:'red',
      borderBottomWidth:1,
      marginVertical: 10
    }
});

export default Input;