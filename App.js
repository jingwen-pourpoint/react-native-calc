/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {CalcButton} from './composants/CalcButton';

const App: () => React$Node = () => {
  const [keyInput, setKeyInput] = useState('');
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState(0);

  const onPressKey = (key) => {
    setKeyInput(keyInput + key);
  };

  const onPressReset = () => {
    setKeyInput('');
    setResult(0);
  };

  const onPressEqual = () => {
    try {
      const result = eval(keyInput);
      setResult(result);
      setHistory([{keyInput: keyInput, result: result}, ...history]);
    } catch (exception) {
      setResult('Invalid expression');
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.row}>
          <CalcButton symbol="+" onPress={onPressKey} />
          <CalcButton symbol="-" onPress={onPressKey} />
          <CalcButton symbol="*" onPress={onPressKey} />
          <CalcButton symbol="/" onPress={onPressKey} />
        </View>

        <View style={styles.row}>
          <View>
            <View style={styles.row}>
              <CalcButton symbol="7" onPress={onPressKey} />
              <CalcButton symbol="8" onPress={onPressKey} />
              <CalcButton symbol="9" onPress={onPressKey} />
            </View>
            <View style={styles.row}>
              <CalcButton symbol="4" onPress={onPressKey} />
              <CalcButton symbol="5" onPress={onPressKey} />
              <CalcButton symbol="6" onPress={onPressKey} />
            </View>
            <View style={styles.row}>
              <CalcButton symbol="1" onPress={onPressKey} />
              <CalcButton symbol="2" onPress={onPressKey} />
              <CalcButton symbol="3" onPress={onPressKey} />
            </View>
            <View style={styles.row}>
              <CalcButton symbol="0" onPress={onPressKey} />
              <CalcButton symbol="." onPress={onPressKey} />
              <CalcButton symbol="AC" onPress={onPressReset} />
            </View>
          </View>

          <View>
            <CalcButton symbol="=" onPress={onPressEqual} />
          </View>
        </View>

        <View>
          <Text style={styles.text}>{keyInput}</Text>
        </View>

        <View>
          <Text style={styles.text}>Résultat: {result}</Text>
        </View>

        <View style={styles.history}>
          <Text style={styles.text}>Historique</Text>
          {history.map((item, key) => (
            <Text style={styles.text} key={key}>
              {item.keyInput} = {item.result}
            </Text>
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  history: {
    marginTop: 40,
  },
});

export default App;
