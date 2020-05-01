import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <Text>This is a multi Offers Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
