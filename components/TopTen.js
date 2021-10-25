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
import { TopTenData } from "../data/TopTenData";
import Icon from "react-native-vector-icons/MaterialIcons";

const TopTen = () => {
  return (
    <View style={styles.listContainer}>
      <Text style={{ color: "white", fontSize: 17, fontWeight: "500" }}>
        Top 10 in Canada Today
      </Text>
      <FlatList
        style={{ height: 600 }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={TopTenData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.imageContainer}>
              <Image style={styles.previews} source={{ uri: item.image }} />
              <View style={styles.bottomBar}>
                <Icon name="info" color="gray" size={20} />
                <Icon name="toc" color="gray" size={20} />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TopTen;

const styles = StyleSheet.create({
  listContainer: {
    position: "absolute",
    zIndex: 500,
    marginTop: 880,
    marginLeft: 5,
    paddingBottom: 100,
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
});
