import React ,{useState}from 'react';
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import {RoundButton} from "../../components/RoundedButton";
export const Focus = ({addSubject}) =>{
  const [subject, setSubject] = useState(null)
   return(
     <View style={styles.container}>
       <View style={styles.titleContainer}>
     
       <View style ={styles.inputContainer}>
       <TextInput  style={styles.inputer} onChangeText={setSubject} label="What do like to focus on"/>
       <View style={styles.button} >
       <RoundButton title="+"  size={60} onPress={()=>addSubject(subject)}/>
       </View>
       </View>
       </View>
       
     </View>
   );
};

const styles = StyleSheet.create({
  container:{
    flex: 0.3
  },
  titleContainer:{
    flex: 0.5,
    padding: 16,
    justifyContent: "center",
  },
  inputContainer:{
    marginTop: 35,
    flexDirection: "row",
    
  },
  button:{
     justifyContent: "center"
  },
  inputer:{
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  }
});