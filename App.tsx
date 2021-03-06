import React from "react";
import { StyleSheet, Text, View, Button, NativeModules } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Native</Text>
      <Text>Main Screen</Text>
      <Button title="Go To Home Screen" onPress={() => NativeModules.CustomNavigation.navigateToHome()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height: 300,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
