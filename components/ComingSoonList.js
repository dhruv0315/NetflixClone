import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { ComingSoonData } from "../data/ComingSoonData";

const ComingSoonList = () => {
  return (
    <View style={styles.listContainer}>
        <Text style={{color: 'white', fontSize: 27, fontWeight: '500', bottom: 30}}>Coming Soon</Text>
      <FlatList
        style={{height: 600}}
        data={ComingSoonData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{alignItems: 'center'}}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View>
                <Image
                  source={{ uri: item.logo }}
                  style={{ height: 10, width: 10, resizeMode: "contain", top: 9 }}
                />
                <Text style={[styles.basicText, styles.type]}>{item.type}</Text>
                <Text style={[styles.basicText, styles.release]}>{item.release}</Text>

                <View>
                  <Text style={[styles.basicText, styles.name]}>{item.name}</Text>
                  <Text style={[styles.basicText, styles.description]}>{item.description}</Text>
                </View>
                <View>
                  <Text style={[styles.basicText, styles.genres]}>{item.genres}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ComingSoonList;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 200,
  },
  listContainer: {
    position: "absolute",
    flex: 1,
    marginTop: 80
  },
  basicText: {
    color: "white",
  },
  type: {
      color: 'white',
      textTransform: 'uppercase',
      fontSize: 8,
      letterSpacing: 2,
      marginLeft: 13,
      marginBottom: 10,
      fontWeight: '300'
  },
  release: {
      color: 'gray',
      fontSize: 14.5,
      marginBottom: 12
  },
  name: {
      fontSize: 19,
      fontWeight: '600'
  },
  description: {
      fontSize: 13.8,
      color: 'gray',
      marginBottom: 10,
      marginTop: 5,
  },
  genres: {
      fontSize: 17,
      marginBottom: 12,
      fontWeight: '500',
  }
});
