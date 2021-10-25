import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity>
        <Text style={styles.item}>TV Shows</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.item}>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.item}>Categories</Text>
        <Icon
          name="arrow-drop-down"
          color="white"
          size={25}
          style={{ bottom: 21, left: 85}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    flex: 1,
    zIndex: 500,
    flexDirection: "row",
    top: 100,
    left: 60,
  },
  item: {
    color: "white",
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: "600",
  },
});
