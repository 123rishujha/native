
//------Assignment-1 introduction to react native;
import {View,Text,StyleSheet,TouchableOpacity,Platform} from "react-native";
import { useState } from "react";

const categories = ["Tea","Car","Bike","School","Bus","Toilet","Class","Friends","Exam","Result","Eat","Rasgulla","Cake","Pizza","Bargar","Home","Sleep","Ghost","Tv","Mobile","Play","Football","BollyBall","Love","Hate","Action","Fun"]

const App = () =>{
  const [selected,setSelected] = useState(0);
  return(
    <View style={styles.container} >
      <Text style={{fontSize:30}} >Interest</Text>
      <Text > Let everyone know whate youre passionat about by adding it to your profile </Text>
      <View style={styles.categories} >
        {
          categories.map((elem)=>{
            return (
              <TouchableOpacity onPress={()=>setSelected(selected+1)} style={styles.touchButton}>
                <Text>{elem}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <TouchableOpacity onPress={()=>alert("successfull")} disabled = { selected < 5 } style={{width:100,backgroundColor:selected>=5 ? "red" : "grey",padding:10,borderRadius:10}}>
        <Text style={{color:"white",textAlign:'center'}}>{selected}/5</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default App;



const styles = StyleSheet.create({
  container: {
    marginTop: Platform.select({
      android: 25,
      ios: 45,
      default: 0
    })
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  touchButton : { 
    background: "red",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    margin: 5,
    borderColor: 'grey',
    borderWidth: 3,
  }
})
