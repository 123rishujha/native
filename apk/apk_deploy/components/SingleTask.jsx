import { useState } from "react";

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ExecuteSql, db, tbl } from "../App";

const SingleTask = ({ item }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [inputText, setInputText] = useState(item?.task || "");

  const handleSave = async () => {
    //update SQLite database
    await ExecuteSql(db, `UPDATE ${tbl} SET task=? WHERE id=? `, [
      inputText,
      item.insertedId,
    ]);
    // update state in listitems
    setIsEditable(false);
  };

  return (
    <View>
      {isEditable ? (
        <View style={styles.container}>
          <TextInput
            style={{
              ...styles.itemStyle,
              borderWidth: 0.5,
              borderColor: "black",
            }}
          />
          <TouchableOpacity onPress={() => handleSave()}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="check"
              size={30}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <Text key={item?.key} style={styles.itemStyle}>
            {item.task}
          </Text>
          <TouchableOpacity onPress={() => setIsEditable(true)}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="square-edit-outline"
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              style={styles.icon}
              name="delete"
              size={30}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SingleTask;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "coral",
    padding: 20,
  },
  itemStyle: {
    flex: 1,
    color: "white",
    fontSize: 25,
  },
  icon: {
    color: "blue",
    borderWidth: 2,
    borderColor: "green",
    marginRight: 10,
    borderRadius: 20,
    padding: 5,
  },
});
