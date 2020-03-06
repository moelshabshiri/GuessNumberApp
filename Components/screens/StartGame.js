import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../Card";
import Input from "../Input";
import NumberContainer from "../NumberContainer";


const StartGame = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputNumber => {
    setEnteredValue(inputNumber.replace(/[^0-9]/g, ""));
  };
  const resetNumber = inputNumber => {
    setEnteredValue("");
  };
  const confirmNumber = () => {
    const choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99.", [
        { text: "OK", style: "destructive", onPress: resetNumber }
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(choosenNumber);
    Keyboard.dismiss();
  };

  let confirmendOutput;

  if (confirmed) {
    confirmendOutput = (
    <Card style={styles.summeryContainer}>
        <Text>You Selected</Text>
       <NumberContainer>{selectedNumber}</NumberContainer>
       <Button title="START GAME" onPress={()=>props.onStartGame(selectedNumber)}/>
    </Card>
    );
  } 

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>START A NEW GAME</Text>
        <Card style={styles.InputStyle}>
          <Text>SELECT A NUMBER</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.ButttonStyle}>
            <View style={styles.Butttons}>
              <Button color="red" title="RESET" onPress={resetNumber} />
            </View>
            <View style={styles.Butttons}>
              <Button color="red" title="CONFIRM" onPress={confirmNumber} />
            </View>
          </View>
        </Card>
        {confirmendOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 15
  },
  InputStyle: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  ButttonStyle: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  Butttons: {
    width: 100
  },
  input: {
    width: 40,
    textAlign: "center"
  }, 
  summeryContainer:
  {
      alignItems:'center',
      marginTop: 20
  }
});

export default StartGame;
