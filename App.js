import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";

import StartGame from "./Components/screens/StartGame";
import GameScreen from "./Components/screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = selsectedNumber => {
    setUserNumber(selsectedNumber);
  };

  let content = <StartGame onStartGame={startGameHandler}/>;
  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
