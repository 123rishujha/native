import {FlatList,View,Image,StyleSheet,Text} from "react-native";

import PostHeader from "./PostHeader.jsx"
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons"


function postBodyTop({userName,userImage,postTitle,postImage}){
  console.log("post body called");
  console.log("postImage from",postImage)
  console.log("userImage from",userImage)
  return(
    <View style={{borderWidth:1,borderColor:"black"}}>
      <PostHeader userName={userName} userImage={userImage} />
      <Text>{postTitle}</Text>
      <Image source={{uri:postImage}} style={{width:250,height:200,marginHorizontal:60}} />
      <View style={styles.postFooter}>
        <AntDesign name="like1" size={20} />
        <EvilIcons name="comment" size={20} />
        <AntDesign name="like1" size={20} />
        <EvilIcons name="comment" size={20} />
      </View>
    </View>
  )
}

export default postBodyTop;

const styles = StyleSheet.create({
  postFooter:{
    height: 100,
    width:"75%",
    marginHorizontal:40, 
    flexDirection:"row",
    justifyContent: "space-around"
  }
})

