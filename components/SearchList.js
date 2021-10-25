import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { searchData } from "../data/SearchData";
import Icon from "react-native-vector-icons/MaterialIcons";

const SearchList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
      style={{height: 600}}
        data={searchData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.listItem}>
              <Image
                source={{ uri: item.image }}
                style={{ height: 90, width: 140, borderRadius: 8 }}
              />
              <View style={{alignItems: 'stretch', justifyContent: 'center'}}>
              <Text style={styles.title}>{item.name}</Text>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Icon name="play-circle-outline" size={30} color="white" style={{left: 208, bottom: 8}} />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 80,
  },
  listItem: {
    flexDirection: "row",
    marginVertical: 7,
  },
  title: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 15,
    top: 15
  },
});
