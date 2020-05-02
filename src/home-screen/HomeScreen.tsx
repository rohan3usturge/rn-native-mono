import React from "react";
import { StyleSheet, Text, View, Button, NativeModules } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen Opened sdsd!</Text>
      <Button title="Go to native screen" onPress={() => NativeModules.CustomNavigation.navigateToPureNative()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
