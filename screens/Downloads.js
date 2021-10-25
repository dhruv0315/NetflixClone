import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DownloadsList from "../components/DownloadsList";
import SmartBar from "../components/SmartBar";

const Downloads = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            color: "white",
            fontSize: 27,
            fontWeight: "500",
            top: 40,
            left: 10,
          }}
        >
          Downloads
        </Text>
        <TouchableOpacity style={styles.castButton}>
          <Icon name="cast" color="white" size={28} />
        </TouchableOpacity>
        <TouchableOpacity style={{ left: 183, top: 47 }}>
          <Image
            style={{ height: 22, width: 22, resizeMode: "contain" }}
            source={{
              uri: "https://i.pinimg.com/originals/bd/ee/4c/bdee4c328550aaf21aa9f43fd19e2136.png",
            }}
          />
        </TouchableOpacity>
      </View>
      <SmartBar />
      <View style={{ flexDirection: "row", top: 76, left: 9 }}>
        <Image
          style={{
            height: 25,
            width: 25,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://i.pinimg.com/originals/bd/ee/4c/bdee4c328550aaf21aa9f43fd19e2136.png",
          }}
        />
        <Text
          style={{
            color: "white",
            top: 1,
            marginLeft: 12,
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          Dhruv
        </Text>
      </View>
      <DownloadsList />
      <View style={styles.box}>
        <Text style={styles.title}>Introducing Downloads for You</Text>
        <Text style={styles.description}>
          We'll download a personalized selection of movies and shows for you,
          so there's always something to watch on your device.
        </Text>
        <View style={styles.circle}>
          <Image
            source={{
              uri: "https://i.redd.it/g4skxhglei601.jpg",
            }}
            style={{
              height: 180,
              width: 130,
              position: "absolute",
              left: 50,
              zIndex: 500,
            }}
          />
          <Image
            source={{
              uri: "https://socialpakora.com/wp-content/uploads/2021/09/little.jpg",
            }}
            style={{
              height: 180,
              width: 130,
              position: "absolute",
              left: -30,
              transform: [{ rotate: "-20deg" }],
              top: 36,
            }}
          />
          <Image
            source={{
              uri: "https://wallpapercave.com/wp/wp5152709.png",
            }}
            style={{
              height: 180,
              width: 130,
              position: "absolute",
              left: 110,
              transform: [{ rotate: "20deg" }],
              top: 36,
            }}
          />
        </View>
        <TouchableOpacity>
          <View style={{backgroundColor: '#3B8AF0', alignItems: 'center', justifyContent: 'center', width: 250, height: 36, marginTop: 70, borderRadius: 10}}>
            <Text style={{color: 'white', fontWeight: '700'}}>Set Up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', width: 185, height: 56, marginTop: 20, borderRadius: 10}}>
            <Text style={{color: 'black', fontWeight: '700'}}>See What You {'\n'}Can Download</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Downloads;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  castButton: {
    left: 175,
    top: 44,
  },
  box: {
    alignItems: "center",
    flex: 1,
    marginTop: 14,
    backgroundColor: "#1f1f1f",
    width: "95%",
    left: 10,
    height: 600,
    borderRadius: 16,
  },
  title: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
    marginTop: 18,
    marginBottom: 10,
  },
  description: {
    color: "#aeaeae",
    fontWeight: "300",
    fontSize: 12,
    width: "65%",
    textAlign: "center",
  },
  circle: {
    marginTop: 50,
    height: 220,
    width: 220,
    backgroundColor: "#404040",
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
