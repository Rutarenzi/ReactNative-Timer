import React from 'react-native';
import { StyleSheet,TouchableOpacity, Text} from "react-native";
import {colors} from "../Utils/color.js";

export const RoundButton = ({
  style = {},
  textStyles ={},
  size= 100,
  ...props
}) =>{
  return(
   <TouchableOpacity
    style={[styles(size).raduis, style]}
    onPress={props.onPress}
    >
   <Text style={[styles(size).text, textStyles]}>{props.title}</Text>
   </TouchableOpacity >
  )
};

const styles =(size)=>({
  raduis:{
    borderRadius: size/2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderWidth: 2,
  },
  text:{
    color: colors.white,
  fontSize: size/3,
  }
})