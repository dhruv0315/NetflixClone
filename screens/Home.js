import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import ContinueWatching from "../components/ContinueWatching";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PlayBar from "../components/PlayBar";
import TopTen from "../components/TopTen";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <NavBar />
      <ImageBackground
        style={styles.bannerImage}
        source={{
          uri: "https://i2.wp.com/technosports.co.in/wp-content/uploads/2021/10/squid-scaled.jpg?fit=1920%2C2560&ssl=1",
        }}
      />
      <View style={styles.blendBottom}></View>
      <View style={[styles.blendBottom, { top: 480, opacity: 0.65 }]}></View>
      <PlayBar />
      <ContinueWatching />
      <TopTen />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    backgroundColor: "black",
  },
  bannerImage: {
    height: 500,
    width: 410,
    resizeMode: "contain",
    right: 10,
  },
  blendBottom: {
    height: 60,
    width: "100%",
    backgroundColor: "black",
    position: "absolute",
    top: 460,
    opacity: 0.25,
  },
});
