import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ContinueWatchingData } from "../data/ContinueWatchingData";
import Icon from "react-native-vector-icons/MaterialIcons";

const ContinueWatching = () => {
  return (
    <View style={styles.listContainer}>
      <Text style={{ color: "white", fontSize: 17, fontWeight: "500" }}>
        Continue Watching for Dhruv
      </Text>
      <FlatList
        style={{ height: 600 }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={ContinueWatchingData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.imageContainer}>
              <Image style={styles.previews} source={{ uri: item.image }} />
              <View style={styles.bottomBar}>
                <Icon name="info" color="gray" size={20} />
                <Icon name="toc" color="gray" size={20} />
              </View>
              <TouchableOpacity
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <View style={styles.playBackground}>
                  <Icon name="play-arrow" size={34} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ContinueWatching;

const styles = StyleSheet.create({
  listContainer: {
    position: "absolute",
    zIndex: 500,
    marginTop: 580,
    marginLeft: 5,
  },
  previews: {
    marginTop: 10,
    height: 220,
    width: 140,
    marginHorizontal: 5,
    opacity: 0.6,
    borderRadius: 8,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    bottom: 20,
  },
  playBackground: {
    height: 60,
    width: 60,
    backgroundColor: "black",
    bottom: 170,
    opacity: 0.7,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
