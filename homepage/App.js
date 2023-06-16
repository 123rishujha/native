import { Image,Text,View,FlatList,StyleSheet,ScrollView, Platform } from "react-native";
import PostBodyTop from './components/post/PostBodyTop.jsx'
import Header from "./components/Header.jsx"
import profile from "./components/post/profile.png"
import Constants from "expo-constants";

let data = [
  {
    userName:"alex",
    userImage:profile,
    postTitle:"New Post from my side",
    postImage:"https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
   {
    userName:"alex",
    userImage:profile,
    postTitle:"New Post from my side",
    postImage:"https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
   {
    userName:"alex",
    userImage:profile,
    postTitle:"New Post from my side",
    postImage:"https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
   {
    userName:"alex",
    userImage:profile,
    postTitle:"New Post from my side",
    postImage:"https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];


function App(){

  const renderItem = ({item}) =>{
    return <PostBodyTop {...item} />
  }


  return(
    <ScrollView style={styles.container} >
      <Header />
      <FlatList data={data} renderItem={renderItem} />
    </ScrollView>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    marginTop: 47
  }
})
