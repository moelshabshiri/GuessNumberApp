import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Card from '..//Card'
import NumberContainer from '..//NumberContainer'

const generateRandomBetwwen=(min, max,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const rndmNum=Math.floor(Math.random() * (max-min))+min;
    if (rndmNum===exclude)
    return generateRandomBetwwen(min,max,exclude);
    else return rndmNum;
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess]= useState(generateRandomBetwwen(1,100,props.userChoice));
    return(
        <View style={styles.screen}>
            <Text > Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttons}>
                <Button title="LOWER" />
                <Button title="GREATER" />
            </Card>
        </View>
    )
};


const styles= StyleSheet.create({
    screen:{
        padding:10,
        alignItems:'center'
    },
    buttons:{
        flexDirection:'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width:300,
        maxWidth:'80%'
    }
  
});

export default GameScreen;