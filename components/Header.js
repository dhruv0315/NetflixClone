import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.blend}></View>
      <View
        style={{
          height: 115,
          width: 500,
          backgroundColor: "black",
          position: "absolute",
          opacity: 0.25,
        }}
      ></View>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1128px-Netflix_2015_N_logo.svg.png",
        }}
        style={{
          height: 35,
          width: 35,
          resizeMode: "contain",
          position: "absolute",
          top: 40,
          left: 20,
        }}
      />
      <TouchableOpacity style={styles.castButton}>
        <Icon name="cast" color="white" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={{ left: 325, top: 46 }}>
        <Image
          style={{ height: 20, width: 20, resizeMode: "contain" }}
          source={{
            uri: "https://i.pinimg.com/originals/bd/ee/4c/bdee4c328550aaf21aa9f43fd19e2136.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    zIndex: 500,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  castButton: {
    left: 310,
    top: 45,
  },
  blend: {
    height: 505,
    width: 500,
    backgroundColor: "black",
    position: 'absolute',
    opacity: 0.35,
  },
});
