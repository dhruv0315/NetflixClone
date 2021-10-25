import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const SmartBar = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 7}}>
        <Icon name="settings" size={20} color="white" />
        <Text style={{ color: "white", marginLeft: 7 }}>Smart Downloads</Text>
        <Icon name="edit" size={20} color="white" style={{left: 195}} />
      </View>
    </View>
  );
};

export default SmartBar;

const styles = StyleSheet.create({
    container: {
        top: 50
    }
});
