import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import SearchList from "../components/SearchList";
import Icon from "react-native-vector-icons/MaterialIcons";

const Search = () => {
  const [enteredText, setEnteredText] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Icon
          name="search"
          size={23}
          color="#aaaaaa"
          style={{ top: 82, zIndex: 100, right: 169 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#aaaaaa"
          value={enteredText}
          onChangeText={(text) => setEnteredText(text)}
        />
      </View>
      <Text style={styles.header}>Top Searches</Text>
      <SearchList />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  header: {
    color: "white",
    fontSize: 25,
    fontWeight: "500",
    top: 75,
  },
  input: {
    width: "97%",
    height: 30,
    backgroundColor: "#4d4d4d",
    top: 55,
    paddingLeft: 36,
    fontSize: 16,
    borderRadius: 10,
    color: 'white'
  },
});
