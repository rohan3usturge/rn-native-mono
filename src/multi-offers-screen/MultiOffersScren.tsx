import React from "react";
import { StyleSheet, Text, View, Button, NativeModules } from "react-native";


export default function MultiOffersScreen() {
  return (
    <View style={styles.container}>
      <Text>React Native</Text>
      <Text>Multi Offers Fragment</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
