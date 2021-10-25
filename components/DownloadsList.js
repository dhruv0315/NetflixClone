import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { downloadsData } from "../data/DownloadsListData";
import Icon from 'react-native-vector-icons/MaterialIcons'

const DownloadsList = () => {
  return (
    <View style={{ marginTop: 100 }}>
      <FlatList
        data={downloadsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.listItem}>
              <Image
                source={{ uri: item.image }}
                style={{ height: 70, width: 120, borderRadius: 5 }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.details}>{item.details}</Text>
                <Text
                  style={[
                    item.status === "Downloaded" ? styles.green : styles.red,
                  ]}
                >
                  {item.status}
                </Text>
              </View>
              <Icon name="chevron-right" size={40} color='#a9a9a9' style={styles.arrow} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default DownloadsList;

const styles = StyleSheet.create({
  name: {
    color: "white",
    bottom: 10,
    fontSize: 16,
    fontWeight: "500",
    marginLeft: -35
  },
  details: {
    color: "gray",
    bottom: 5,
    fontSize: 11,
    fontWeight: "300",
    marginLeft: -35
  },
  listItem: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  green: {
    color: "#24B21B",
    fontWeight: '300',
    fontSize: 12,
    marginLeft: -35
  },
  red: {
    color: "#F56122",
    fontWeight: '300',
    fontSize: 12,
    marginLeft: -35
  },
  arrow: {
      bottom: 6
  }
});
