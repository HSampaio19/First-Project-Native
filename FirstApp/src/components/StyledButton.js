import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

// pospor react

const styles= StyleSheet.create({
    StyledButtonContainer: {
    minWidth:40,
    minHeight:40,
    backgroundColor: "#7159c1",
    borderRadius: 4,
    justifyContent:"center",
    alignItems:"center"
  },
    StyledButtonText: {
    alignSelf: "center",
    textTransform:"uppercase",
    fontWeight: "bold",
    fontSize:14,
    color: "#fff",
  },
    StyledButtonIcon: {
    fontSize:28,
    color: "#fff",
  }
})

export const StyledButton = ({
  title,
  onPress,
  loading,
  icon,
  styleProps}) => {



  return(
    <TouchableOpacity
      onPress={onPress}
      style={(
        styles.StyledButtonContainer,
        styles.StyledButtonContainer = {
          ...styles.StyledButtonContainer,
          ...styleProps
        }
      )}>
      <Text style={styles.StyledButtonText}>
        {
          loading ? <ActivityIndicator color={"#FFF"}/> :
          icon ? <Icon name={icon} style={styles.StyledButtonIcon}/> : title
        }
      </Text>
    </TouchableOpacity>
  )

}



