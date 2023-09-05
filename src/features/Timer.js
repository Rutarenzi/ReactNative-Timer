import React ,{useState} from 'react';
import { View, Text, StyleSheet,Vibration } from 'react-native';
import { ProgressBar} from "react-native-paper";
import { CountDown } from '../components/CountDown';
import  {useKeepawake} from "expo-keep-awake";
import { RoundButton } from '../components/RoundedButton';
import {spacing } from "../Utils/size";
import { colors} from "../Utils/color";
import {Timing} from "./Timing";
const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1* ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS
];

export const Timer = ({ focusSubject, clearSubject,onTimerEnd }) => {
  useKeepawake;
  const [isStarted, setIsStarted] = useState(false);
  const [progress,setProgress] = useState(1);
  const [minutes,setMinutes] = useState(0.1);
    const onEnd =(reset) => {
        Vibration.vibrate(PATTERN);
        setIsStarted(false);
        setProgress(1);
        reset();
        onTimerEnd(focusSubject);
      }
 return( <View style={styles.container}>
    <View style={styles.countdown}>
      <CountDown
       minutes={minutes} onProgress={setProgress} 
       isPaused={!isStarted}
        onEnd={onEnd} />
       <View style={{paddingTop: spacing.xxl}}>

      <Text style={styles.title}>Focusing on</Text>
      <Text style={styles.task}>{focusSubject}</Text>
    </View>
    </View>
   <View style={{paddingTop: spacing.sm}}>
     <ProgressBar 
     progress={progress}
      color={colors.progressBar}
      style={{height: spacing.sm}}
     />
   </View>
    <View style={styles.timingWrapper}>
     <Timing onChangeTime={setMinutes}/>
    </View>
    <View style={styles.buttonWrapper}>
     {!isStarted &&  <RoundButton title="Start"  onPress={()=>setIsStarted(true)}/>}
     {isStarted &&  <RoundButton title="pause"  onPress={()=>setIsStarted(false)}/>}
    </View>
    <View style={styles.clearSubjectWraper}>
      <RoundButton title="-" size={50} onPress={clearSubject} />
    </View>
  </View>
 )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingWrapper: {
     flex: 0.1,
     flexDirection: "row",
     paddingTop: spacing.xxl
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.sm ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubjectWraper:{
   flexDirection: "row",
   justifyContent: "center"
  },
  title: {
   color: colors.white,
   fontWeight: "bold",
   textAlign:"center"
  },
  task: {
  color: colors.white,
  textAlign: "center",
  }

});
