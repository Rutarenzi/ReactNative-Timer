import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform, StatusBar } from 'react-native';
import { Timer } from './src/features/Timer';
import { Focus } from './src/features/focus/focus';
import { colors } from './src/Utils/color';
import {FocusHistory} from "./src/features/FocusHistory"
export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState();
  return (
    <View style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history,subject])
          }}
          clearSubject={() => {setCurrentSubject(null)}}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
 
});
