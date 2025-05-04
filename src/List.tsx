import {
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  Button,
  Touchable,
  Keyboard,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import List1 from "./List1";
import Api_fetched_file from "./api_fetched_file";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import ReactiveButton from "reactive-button";
import Reduxuse from "../redux/Reduxuse";
const gg = (firstName: string, secondName: string, thirdName: string) => {
  return firstName + secondName + thirdName;
};

type RootStackParamList = {
  List1: {
    store: string[];
    setStore: React.Dispatch<React.SetStateAction<string[]>>;
  };
  api_fetched_file: undefined;
  Reduxuse: undefined;
};

const list = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isHungry, setIsHungry] = useState(true);
  const [text, setText] = useState("");
  const [store, setStore] = useState<string[]>([]);
  const pushtoarray = () => {
    if (text.trim() === "") {
      Alert.alert("Empty Input", "Please enter a todo item.");
      return;
    }
    if (!store.includes(text)) {
      setStore((prevStore) => [...prevStore, text]);
      Alert.alert("Added", `"${text}" added to the list.`);
      setText("");
    } else {
      Alert.alert("Duplicate", `"${text}" is already in the list.`);
    }
    setText("");
    Keyboard.dismiss();
  };
  const [data, setData] = useState<any[]>([]);

  const getapidata = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    getapidata();
  }, []);
  const renderItem = ({ item }: { item: any }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}>
      <Text style={{ fontSize: 18 }}>User ID: {item.userId}</Text>
      <Text>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.main}>
      <View style={styles.first}>
        {/* <Text style={{ color: "white" }}>TODO LIST</Text> */}
      </View>

      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() =>
            navigation.navigate("List1", { store: store, setStore: setStore })
          }
        >
          <View
            style={{
              height: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              Check added items here
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* <View style={{ padding: 20, bottom:400}}>
        <Button
          title="Check API fetched data here"
          onPress={() => navigation.navigate("api_fetched_file")}
        />
      </View>
      <View style={{ padding: 20, bottom:400 }}>
        <Button
          title="Check Redux use here"
          onPress={() => navigation.navigate("Reduxuse")}
        />
      </View> */}
      {/* <ScrollView style={{ flex: 1, padding: 20, bottom:200 }}>
        <FlatList style={{backgroundColor:"#3E3364"}} data={data} renderItem={renderItem} />
      </ScrollView> */}
      <Api_fetched_file store={store} setStore={setStore}/>
      <View style={styles.logic}>
        <TextInput
          style={{ color: "white" }}
          placeholder="What do you want to do"
          placeholderTextColor="white"
          onChangeText={setText}
          value={text}
        />
        <TouchableOpacity onPress={pushtoarray}>
          <View style={styles.button}>
            <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      {/* <View style={[styles.box, {backgroundColor: 'powderblue'}]} /> */}
      {/* <List1 store={store} setStore={setStore} />  */}
      {/* <View>
             <View style={{ padding: 20 }}>
                {store.map((item, index) => (
                <Text key={index} style={{ marginBottom: 5 }}>{item}</Text>
                ))}
            </View>
            <Button title="Clear" color="gray" onPress={() => setStore([])} />
            </View>    */}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#1E1A3C",
    flex: 1,
    height: 100,
  },
  first: {
    flex: 1,
    height: 50,
    alignItems: "center",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  logic: {
    borderColor: "#fff",
    backgroundColor: "#3E3364",
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    bottom: 20,
  },
  box: {
    width: 50,
    height: 50,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    backgroundColor: "#3E3364",
    shadowColor: "rgb(255, 0, 212)",
    shadowOffset: { height: 30, width: 30 },
    shadowOpacity: 30,
    shadowRadius: 20,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    bottom:300
  },
});

export default list;
