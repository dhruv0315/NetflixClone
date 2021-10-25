import React from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import ComingSoonList from "../components/ComingSoonList";
import Icon from 'react-native-vector-icons/MaterialIcons'

const ComingSoon = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.castButton}>
        <Icon name="search" color="white" size={28} />
      </TouchableOpacity>
      <TouchableOpacity style={{ left: 349, top: 27 }}>
        <Image
          style={{ height: 22, width: 22, resizeMode: "contain" }}
          source={{
            uri: "https://i.pinimg.com/originals/bd/ee/4c/bdee4c328550aaf21aa9f43fd19e2136.png",
          }}
        />
      </TouchableOpacity>
      <ComingSoonList />
    </View>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  castButton: {
    left: 310,
    top: 53,
  },
});
