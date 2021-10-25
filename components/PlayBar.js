import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const PlayBar = () => {
  return (
    <View style={styles.barContainer}>
      <View style={styles.genres}>
        <Text style={{ color: "white", fontSize: 17, fontWeight: "500" }}>
          Drama • Thriller • Action
        </Text>
      </View>
      <View style={styles.playContainer}>
        <TouchableOpacity style={{ marginTop: -5 }}>
          <Icon name="add" color="white" size={25} style={{ marginLeft: 10 }} />
          <Text
            style={{
              color: "white",
              marginRight: 15,
              fontSize: 13,
              fontWeight: "500",
            }}
          >
            My List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              width: 90,
              height: 35,
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Icon
              name="play-arrow"
              color="black"
              size={25}
              style={{ marginLeft: 10 }}
            />
            <Text
              style={{
                color: "black",
                marginRight: 15,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Play
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: -3}}>
          <Icon name="info-outline" color="white" size={25} style={{ marginLeft: 10 }} />
          <Text
            style={{
              color: "white",
              marginLeft: 10,
              fontSize: 13,
              fontWeight: "500",
            }}
          >
            Info
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayBar;

const styles = StyleSheet.create({
  barContainer: {
    position: "absolute",
    top: 480,
    flex: 1,
    marginLeft: 100,
  },
  playContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    width: "100%",
    marginLeft: -55,
    marginTop: 15,
  },
});
