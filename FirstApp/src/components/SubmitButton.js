import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles= StyleSheet.create({
  SubmitButtonContainer: {
    width:40,
    height:40,
    backgroundColor: "#7159c1",
    borderRadius: 4,
    justifyContent:"center",
    alignItems:"center"
  },
  SubmitButtonText: {
    alignSelf: "center",
    fontSize:28,
    color: "#fff",
  },
  SubmitButtonIcon: {
    fontSize:28,
    color: "#fff",
  }
})

export const SubmitButton = ({title,onPress,icon,backgroundColor}) => {

  return(
    <TouchableOpacity onPress={onPress} style={styles.SubmitButtonContainer}>
      <Text style={styles.SubmitButtonText}>
        {icon ? <Icon name={icon} backgroundColor={backgroundColor} style={styles.SubmitButtonIcon}/> : title}
      </Text>
    </TouchableOpacity>
  )

}



