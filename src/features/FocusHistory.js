import React from "react";
import { View,Text, StyleSheet, FlatList} from  "react-native";
import { colors } from "../Utils/color";
import { fontSizes} from "../Utils/size";
export const FocusHistory =({history}) => {
  if(!history || !history.length) return null;
  const renderItem =({item}) => <Text style={styles.item}>{item}</Text>
 return(
   <View>
    <Text style={styles.title}>Focus History Time</Text>
    <FlatList
      data={history}
      renderItem={renderItem}
     />

   </View>
 )
}
const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    textAlign: "center",
    fontWeight: "bold"
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white
  }
})