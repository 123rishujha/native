import { View,Text,Image,StyleSheet,TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useState } from "react";


function PostHeader({userImage,userName}){
  console.log("userImage from postHeader",userImage,"userName",userName)  

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={userImage} />
      <Text>{userName}</Text>
      <TouchableOpacity>
        <Text style={{color:"blue"}}>Connect</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PostHeader


const styles = StyleSheet.create({
  container:{
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    height: 40,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    borderColor:"black",
    position:"sticky",
    top: 0
  },
  image:{
    height: 40,
    width: 40,
    borderRadius: 50,
    flexDirection: "column",
    backgroundColor:"grey"
  },
})