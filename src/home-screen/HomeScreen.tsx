import React from "react";
import { StyleSheet, Text, View, Button, NativeModules } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>React Native</Text>
      <Text>Home Screen</Text>
      <Button title="Go to native screen" onPress={() => NativeModules.CustomNavigation.navigateToPureNative()} />
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
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
