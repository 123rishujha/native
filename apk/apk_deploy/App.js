import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import { openDatabase } from "expo-sqlite";

import SingleTask from "./components/SingleTask.jsx";

export const db = openDatabase("rishu.db");

export const tbl = "taskListTable";

export function ExecuteSql(db, query, params = []) {
  return new Promise((resolve, reject) => {
    db.transaction((txn) => {
      txn.executeSql(
        query,
        params,
        (tx, res) => resolve(res),
        (e) => reject(e)
      );
    });
  });
}

function App() {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    ExecuteSql(
      db,
      `CREATE TABLE IF NOT EXISTS ${tbl} (id INTEGER PRIMARY KEY AUTOINCREMENT, task VARCHAR(20), status INTEGER(1) )`
    )
      .then((t) => {
        console.log("Success", t);
        ExecuteSql(db, `SELECT * FROM ${tbl}`)
          .then((res) => {
            console.log("res here", res?.rows?._array);
            setListItems((prev) => [...res?.rows?._array]);
          })
          .catch((err) => console.log("err", err));
      })
      .catch((e) => console.log("Failure ", e));
  }, []);

  const addTask = (newTask) => {
    ExecuteSql(db, `INSERT INTO ${tbl} (task,status) VALUES(?,?)`, [newTask, 0])
      .then((t) => {
        console.log("success", t);
        console.log("newTask", newTask, "t", t);
        setListItems((prev) => [
          ...prev,
          { id: t.insertedId, task: newTask, status: 0 },
        ]);
        setInputText("");
      })
      .catch((err) => console.log("failure", err));
  };

  return (
    <View style={styles.container}>
      <Text>SQLite Task List</Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={(t) => setInputText(t)}
        />
        <TouchableOpacity onPress={() => addTask(inputText)}>
          <AntDesign name="caretright" size={25} style={styles.inptBtn} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {listItems?.map((item) => (
          <SingleTask key={item.insertedId} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 47,
  },
  inptBtn: {
    borderWidth: 0.5,
    borderRadius: 5,
    marginLeft: 5,
  },
  textInput: {
    borderWidth: 0.5,
    flex: 1,
    borderRadisu: 5,
    paddingLeft: 7,
  },
});
