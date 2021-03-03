import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

export const CalcButton = (props) => {

  const heightClass = props.symbol === "=" ? styles.equalSign : styles.generic;


  return (
    <TouchableHighlight
      underlayColor="red"
      style={[styles.button, heightClass]}
      onPress={() => {props.onPress(props.symbol);}}
    >

      <Text style={styles.symbol}>{props.symbol}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#b9b4e3",
    padding: 10,
    width: 80,
    borderWidth: 0.5,
    borderColor: "lightgray",
  },
  equalSign: {
    height: 200,
    backgroundColor: "orange",
    justifyContent: "center",
  },
  generic: {
    height: 50,
  },
  symbol: {
    fontSize: 30,
  },
});
