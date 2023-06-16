import { View,Text,TextInput,Image,StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useState } from "react";


function Header(){
  const [query,setQuery] = useState("search");

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/snack-icon.png")} />
      <View style={styles.searchBarHolder}>
        <Ionicons name="search" size={25}  /> 
        <TextInput value={query} style={styles.searchBar} />
      </View>
      <Ionicons  name="chatbox-ellipses" size={30}  /> 
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
  container:{
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    height: 40,
    flexDirection: "row",
    // borderWidth: 1,
    justifyContent:"space-between"
  },
  image:{
    height: 40,
    width: 40,
    borderRadius: 50,
    flexDirection: "column",
    backgroundColor:"grey"
  },
  searchBarHolder:{
    width: "70%",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#E0E0E0",
    paddingLeft: 5,
    borderRadius: 5,
  },
  searchBar:{
    width:"90%",
    height:30,
    outlineColor: "transparent",
    marginLeft:5
  }
})