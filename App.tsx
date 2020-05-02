import React from "react";
import { StyleSheet, Text, View, Button, NativeModules } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Main Screen from React Native</Text>
      <Button title="Go To Home Screen" onPress={() => NativeModules.CustomNavigation.navigateToHome()}/>
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
